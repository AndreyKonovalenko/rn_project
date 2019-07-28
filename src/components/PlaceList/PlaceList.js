import React from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.listData}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default PlaceList;
