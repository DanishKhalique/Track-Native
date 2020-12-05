import '../_markLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/TrackMap/Map';

const TrackCreateScreen = () => {
	const [ err, setErr ] = useState(null);

	const startWatching = async () => {
		try {
			const { granted } = await requestPermissionsAsync();
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10
				},
				(location) => {
					console.log(location);
				}
			);
			if (!granted) {
				throw new Error('Location permission not granted');
			}
		} catch (e) {
			setErr(e);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2>Create a Track</Text>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
		</SafeAreaView>
	);
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
