import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/picture_1.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import {
  addPlace,
  deletePlace,
  deSelectPlace,
  selectPlace
} from './src/store/actions/index';

class App extends Component {
  placeAddHandler = placeName => {
    this.props.onAddPlace(placeName);
    console.log('Added new placename');
  };

  placeDeleteHandler = () => {
    this.props.onDeletPlace();
  };
  modelCloseHandler = () => {
    this.props.onDeselectPlace();
  };
  placeSelectHundler = key => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>MY NEW APP</Text>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeleteHandler}
          onModalClosed={this.modelCloseHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddHandler} />
        <PlaceList
          listData={this.props.places}
          onItemSelected={this.placeSelectHundler}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletPlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deSelectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
