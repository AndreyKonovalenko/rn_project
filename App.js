import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    places: []
  };

  placeAddHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: 'uniq key is: ' + Math.random(),
          value: placeName
        })
      };
    });
  };

  placeDeletedHundler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(element => {
          return element.key !== key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>MY NEW APP</Text>
        <PlaceInput onPlaceAdded={this.placeAddHandler} />
        <PlaceList
          listData={this.state.places}
          onItemDeleted={this.placeDeletedHundler}
        />
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
