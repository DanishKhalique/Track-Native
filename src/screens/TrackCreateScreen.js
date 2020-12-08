//import '../_markLocation'
import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
	const { state: { recording }, addLocation } = useContext(LocationContext);
	const callback = useCallback(
		(location) => {
			addLocation(location, recording);
		},
		[ recording ]
	);
	const [ err ] = useLocation(isFocused || recording, callback); //custom hook // true start tracking

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2>Create a Track</Text>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
			<TrackForm />
		</SafeAreaView>
	);
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
