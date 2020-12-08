import React, { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
	const { state: { name, recording, location }, startRecording, stopRecording, changeName } = useContext(
		LocationContext
	);

	const [saveTrack] = useSaveTrack()

	//console.log(location.length);

	return (
		<React.Fragment>
			<Spacer />
			<Input value={name} onChangeText={changeName} placeholder="Enter name" />
			{recording ? (
				<Button title="Stop" onPress={stopRecording} />
			) : (
				<Button onPress={startRecording} title="Start Recording" />
			)}
			<Spacer />
			{!recording && location.length ? <Button title="Save Recording" onPress={saveTrack} /> : null}

			<Spacer />
		</React.Fragment>
	);
};

export default TrackForm;
