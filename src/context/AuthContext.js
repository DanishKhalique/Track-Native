import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signup':
			return { errorMessage: '', token: action.payload };
		default:
			return state;
	}
};

const signup = (dispatch) => async ({ email, password }) => {
	// make api request to signup with that email and password
	try {
		const response = await trackerApi.post('/signup', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signup', payload: response.data.token });
		// if we signup, modify state ,and say that we are authenticated or navigate to other screen
		navigate('TrackList');
	} catch (err) {
		// if signing up fails (eg: email already exists) we need to reflect and error message
		dispatch({ type: 'add_error', payload: 'Error with Signup' });
	}
};

const signin = (dispatch) => ({ email, password }) => {
	// try to sign in
	//handle success by updating state
	//handle failure by showing error somehow
};

const signout = (dispatch) => ({ email, password }) => {
	// simply somehow signout
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{ token: null, errorMessage: '' }
);
