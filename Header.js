import React, { Component } from 'react';
import {
  Text, StyleSheet, View, TextInput,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
          placeholder="escribe tu texto"
          onChangeText={this.props.establecerTexto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FF5722',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    padding:'0 0 0 10';

  }

});
