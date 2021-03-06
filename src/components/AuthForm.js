import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	return (
		<>
			<Spacer />
			<Text h3>{headerText}</Text>
			<Spacer />
			<Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
			<Spacer />
			<Input
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry
			/>
			{errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
			<Spacer />
			<Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
			<Spacer />
		</>
	);
};

export default AuthForm;

const styles = StyleSheet.create({
	
    errorMessage: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'red',
		marginTop: 10
	},
});
