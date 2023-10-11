import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Contador: React.FC = () => {
  const [contador, setContador] = useState<number>(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const diminuirContador = () => {
    setContador(contador - 1);
  };

  const zerarContador = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>
      <TouchableOpacity style={styles.button} onPress={aumentarContador}>
        <Text>Aumentar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={diminuirContador}>
        <Text>Diminuir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={zerarContador}>
        <Text>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    margin: 5,
  },
});

export default Contador;