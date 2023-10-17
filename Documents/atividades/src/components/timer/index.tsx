import { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { styles } from "../counter/styles";

export default function Timer() {
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
