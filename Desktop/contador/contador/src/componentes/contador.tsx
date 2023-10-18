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



export default Contador;