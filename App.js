import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends Component {
  state = {
    places: []
  };

  placeAddHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((element, index) => (
      <ListItem placeName={element} key={index} />
    ));
    return (
      <View style={styles.container}>
        <Text>MY NEW APP</Text>
        <PlaceInput onPlaceAdded={this.placeAddHandler} />
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
