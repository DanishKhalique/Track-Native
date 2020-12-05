import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
	let points = [];
	for (let i = 0; i < 20; i++) {
		points.push({
			latitude: 19.140512 + i * 0.0001,
			longitude: 72.842155 + i * 0.0001
		});
	}

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: 19.140512,
				longitude: 72.842155,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			}}
		>
			<Polyline coordinates={points} />
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		height: 250
	}
});
