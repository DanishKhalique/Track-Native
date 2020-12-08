import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = () => {
	const { state } = useContext(TrackContext);
	const _id = navigation.getParam('_id');

	const track = state.find((t) => t._id === _id);

	const initialCoords = track.location[0].coords;

	return (
		<View>
			<Text style={{ fontSize: 48 }}>{track.name}</Text>
			<MapView
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01
				}}
				style={styles.map}
			>
				<Polyline coordinates={track.location.map((loc) => loc.coords)} />
			</MapView>
		</View>
	);
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
	map: {
		height: 250
	}
});
