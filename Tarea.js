import React, { Component } from 'react';
import {
  Text, StyleSheet, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          {this.props.item}
        </Text>
        <Ionicons
          name="md-trash"
          size={24}
          color="#747d8c"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  texto: {
    fontSize: 24,
    color: '#747d8c',


  },


});
