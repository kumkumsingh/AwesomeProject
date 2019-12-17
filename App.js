import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
//import { createAppContainer } from 'react-navigation';
import EventListContainer from './src/components/EventListContainer';
//import { createStackNavigator } from 'react-navigation-stack';
import EventForm from './src/components/EventForm';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>MY Events</Text>
        <EventListContainer />
        <EventForm />
      </View>
    );
  }
}
