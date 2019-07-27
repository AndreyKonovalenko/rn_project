import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListItem from './../ListItem/ListItem';

const PlaceList = props => {
  const placesOutput = props.listData.map((element, index) => (
    <ListItem
      placeName={element}
      key={index}
      onItemPressed={() => props.onItemDeleted(index)}
    />
  ));
  return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default PlaceList;
