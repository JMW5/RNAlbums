import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Example of a Functional Component
//const AlbumList = () => {
//	return (
//			<View>
//				<Text>Album List</Text>
//				.			</View>
//	       )
//}



//This is an example of using a Class Based Component
class AlbumList extends Component {
	//This is creating default state for this component
	state = { albums: [] };

	//This is a life cycle method
	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }) );
	}

	renderAlbums() {
		return this.state.albums.map(album => 
				<AlbumDetail key={album.title} album={album} />
		);
	}


	render() {
		return (
				<ScrollView>
					{this.renderAlbums()}
				</ScrollView>
		       )
	}	
}



export default AlbumList;
