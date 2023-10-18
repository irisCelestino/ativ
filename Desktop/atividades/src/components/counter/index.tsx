import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Text style={styles.text}>Contador :{counter} </Text>

      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 1);
        }}
        style={styles.button}
      >
        <Text>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCounter(counter - 1);
        }}
      >
        <Text>Decrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCounter(0);
        }}
      >
        <Text>Resetar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
