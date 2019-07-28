import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/picture_1.jpg';

export default class App extends Component {
  state = {
    places: []
  };

  placeAddHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: 'uniq key is: ' + Math.random(),
          name: placeName,
          image: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg'
          }
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
