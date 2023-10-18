import React from "react";

import { View, Text, Pressable, StyleSheet } from "react-native";

function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>Tela Inicial</Text>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "lightgray" : "white" },
          styles.button,
        ]}
        onPress={() => navigation.navigate("Detalhes")}
      >
        {({ pressed }) => (
          <Text
            style={[styles.buttonText, { color: pressed ? "gray" : "black" }]}
          >
            Ir para Detalhes
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "lightgray" : "white" },
          styles.button,
        ]}
        onPress={() => navigation.navigate("Configurações")}
      >
        {({ pressed }) => (
          <Text
            style={[styles.buttonText, { color: pressed ? "gray" : "black" }]}
          >
            Ir para Configurações
          </Text>
        )}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default HomeScreen;
