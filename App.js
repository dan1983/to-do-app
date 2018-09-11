import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    this.setState({ texto: value });
  }

  agreagartarea = () => {
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: Date.now().toString() }],
      texto: '',
    });
  }

  eliminarTareas = (id) => {
    console.log(id);
    const nuevasTareas = this.state.tareas.filter(
      tareas => tareas.key !== id,
    );

    console.log(nuevasTareas);

    this.setState({
      tareas: nuevasTareas,

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agreagartarea}
        />
        <Text>{this.state.texto}</Text>
        <Body
          arrayTareas={this.state.tareas}
          eliminar={this.eliminarTareas}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
