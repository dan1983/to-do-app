import React, { Component } from 'react';
import {
  Text, StyleSheet, View, TextInput,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          placeholder="Useless Placeholder....."
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
  },
  texto: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 24,
  },

});
