import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
