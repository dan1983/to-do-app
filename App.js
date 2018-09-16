import React from 'react';
import {
  StyleSheet, Text, View, AsyncStorage,
} from 'react-native';
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


  componentDidMount() {
    this.recueperarTelefono();
  }

  establecerTexto = (value) => {
    this.setState({ texto: value });
  }

  agreagartarea = () => {
    const nuevasTareas = [...this.state.tareas, { texto: this.state.texto, key: Date.now().toString() }];
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
      texto: '',
    });
  }

  guardarEnTelefono = (nuevasTareas) => {
    AsyncStorage.setItem('@AppCurso:tareas', JSON.stringify(
      nuevasTareas,
    )).then((valor) => {
      console.log(valor);
    }).catch((error) => {
      console.log(error);
    });
  }

  recueperarTelefono = () => {
    AsyncStorage.getItem('@AppCurso:tareas').then((valor) => {
      const nuevasTareas = JSON.parse(valor);
      if (valor != null) {
        this.setState({
          tareas: nuevasTareas,
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }


  eliminarTareas = (id) => {
    console.log(id);
    const nuevasTareas = this.state.tareas.filter(
      tareas => tareas.key !== id,
    );

    this.guardarEnTelefono(nuevasTareas);

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
