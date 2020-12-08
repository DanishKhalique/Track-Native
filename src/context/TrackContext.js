import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_tracks':
			return action.payload;
		default:
			return state;
	}
};

const fetchTracks = (dispatch) => async () => {
	const response = await trackerApi.get('/tracks');
	dispatch({ type: 'fetch_tracks', payload: response.data });
};
const createTrack = (dispatch) => async (name, location) => {
	await trackerApi.post('/tracks', { name, location });
	//make a request to our api
	//console.log(name, location.length);
};

export const { Provider, Context } = createDataContext(trackReducer, { fetchTracks, createTrack }, []);
