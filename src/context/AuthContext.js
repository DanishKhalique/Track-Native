import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { errorMessage: '', token: action.payload };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		case 'signout':
			return { token: null, errorMessage: '' };
		default:
			return state;
	}
};

const tryLocalSignin = (dispatch) => async () => {
	// try to sign in
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });
		navigate('TrackList');
	} else {
		navigate('Signin');
	}
};

const signup = (dispatch) => async ({ email, password }) => {
	// make api request to signup with that email and password
	try {
		const response = await trackerApi.post('/signup', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		// if we signup, modify state ,and say that we are authenticated or navigate to other screen
		navigate('TrackList');
	} catch (err) {
		// if signing up fails (eg: email already exists) we need to reflect and error message
		dispatch({ type: 'add_error', payload: 'Error with Signup' });
	}
};

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'clear_error_message' });
};

const signin = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signin', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		//handle success by updating state
		dispatch({ type: 'signin', payload: response.data.token });
		navigate('TrackList');
	} catch (err) {
		//handle failure by showing error somehow
		dispatch({ type: 'add_error', payload: 'Error with Signin' });
	}
};

const signout = (dispatch) => async () => {
	// simply somehow signout
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout' });
	navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin, signout, clearErrorMessage, tryLocalSignin },
	{ token: null, errorMessage: '' }
);
