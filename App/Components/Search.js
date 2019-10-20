/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity,Dimensions,Keyboard } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'
import { HitTestResultTypes } from 'expo/build/AR';


export default class Search extends Component {

  submit = () => {
    this.props.loadItems(); 
    this.textInput.clear()
    Keyboard.dismiss();

  }
  render () {
    return (
      <View style={styles.searchBar}> 
        				<TextInput 
					placeholder = 'Search for News'
          onChangeText = {text => this.props.onChangeSearch(text)}
          onSubmitEditing={this.submit}
          ref={input => { this.textInput = input }} 
				/>
        <TouchableOpacity
					onPress = {this.submit}>
					<FontAwesome
            name ='search'
            color='#007AFF'
						size = {25}
						alignSelf = 'center'
					/>
				</TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  searchBar: {
    flex: 0.4,
    borderRadius: 100,
    flexDirection: 'row',
    width: Dimensions.get('window').width *0.85 ,
		paddingHorizontal: 25,
		backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'space-between',

  }
});
