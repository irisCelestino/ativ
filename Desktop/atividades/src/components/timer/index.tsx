import { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  SafeAreaViewComponent,
} from "react-native";
import { styles } from "../counter/styles";
import React from "react";

export function Timer() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const resetarHora = () => {
    const newHora = new Date();
    newHora.setMinutes(newHora.getMinutes() - 10);
    setHora(newHora);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.relogioConteiner}></View>
    </SafeAreaView>
  );
}
