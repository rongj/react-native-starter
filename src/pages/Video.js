import React, { Component } from 'react'
import {
	View,
	Text
} from 'react-native'

export default class Video extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null
	})

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Video!</Text>
			</View>
		)
	}
}