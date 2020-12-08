import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

import { Context as AuthContext } from '../context/AuthContext';
const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 30 }}>SIGNOUTTTTT</Text>
			<Spacer />
			<Button title="Sign Out" onPress={signout} />
		</SafeAreaView>
	);
};

AccountScreen.navigationOptions = {
	title: 'Account',
	tabBarIcon: <FontAwesome name="gear" size={20} />
};

export default AccountScreen;

const styles = StyleSheet.create({});
