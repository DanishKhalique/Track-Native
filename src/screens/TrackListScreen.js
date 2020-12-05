import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
	return (
		<View>
			<Text>TrackList</Text>
			<Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
		</View>
	);
};

export default TrackListScreen;

const styles = StyleSheet.create({});
