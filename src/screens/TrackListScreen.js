import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	return (
		<React.Fragment>
			<NavigationEvents onWillFocus={fetchTracks} />
			<Text style={{ fontSize: 48, alignSelf: 'center' }}>TrackList</Text>
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
							<ListItem chevron title={item.name} />
						</TouchableOpacity>
					);
				}}
			/>
		</React.Fragment>
	);
};

export default TrackListScreen;

const styles = StyleSheet.create({});
