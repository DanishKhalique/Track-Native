import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);
	//console.log(state);
	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign In for  Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign In"
				onSubmit={signin}
			/>
			<Navlink routeName="Signin" text="Don't have an account? Sign Up" />
		</View>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

export default SigninScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		borderColor: 'red',
		borderWidth: 10,
		marginBottom: 100
	}
});
