import React, { Component } from 'react';
import {
  Text, StyleSheet, View, FlatList,
} from 'react-native';
import Tarea from './Tarea';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <FlatList
          data={this.props.arrayTareas}
          renderItem={({ item }) => <Tarea item={item.texto} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#f1f2f6',

  },

});
