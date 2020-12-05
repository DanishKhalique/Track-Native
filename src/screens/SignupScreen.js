import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
	//console.log(state);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign Up for  Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signup}
			/>
			<Navlink routeName="Signin" text="Already have an account? Sign In instead" />
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		borderColor: 'red',
		borderWidth: 10,
		marginBottom: 100
	}
});
