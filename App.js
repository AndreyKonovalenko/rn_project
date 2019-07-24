import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { thisExpression } from '@babel/types';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((element, index) => (
      <Text key={index}>{element}</Text>
    ));
    return (
      <View style={styles.container}>
        <Text>MY NEW APP</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder='An awesme place'
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            style={styles.placeButton}
            title='Add'
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
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
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
