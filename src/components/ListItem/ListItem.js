import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image
} from 'react-native';

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        resizeMode='cover'
        source={props.placeImage}
        style={styles.placeImage}
      />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    width: 30,
    height: 30,
    marginRight: 8
  }
});

export default ListItem;
