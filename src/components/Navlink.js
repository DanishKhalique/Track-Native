import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const Navlink = ({ navigation, text, routeName }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default withNavigation(Navlink);

const styles = StyleSheet.create({
	link: {
		color: 'blue',
		fontSize: 17
	}
});
