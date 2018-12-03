

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';




class App extends React.Component{
  render() {
    return (
      <View>
        <StatusBar hidden={true} />

        <Text style={styles.defaultText}>
        GIT live 2 now
        </Text>
        <Text style={[styles.defaultText,styles.selectedText]}>
        Bonjour le mounde!!!
        </Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  
    defaultText:{
        fontSize:20,
        padding:100,
        margin:20,
        borderWidth:StyleSheet.hairlineWidth,
        color:'red'
    },
    
    selectedText:{
        backgroundColor:'yellow',
        color:'blue',
        fontWeight:'bold'
    }
    })
AppRegistry.registerComponent('albums', () => App);
