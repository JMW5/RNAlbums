import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';



//Component
const App = () => {
	return (
		<View>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
	       )
};


//Puts the component on the screen
AppRegistry.registerComponent('albums', () => App);
