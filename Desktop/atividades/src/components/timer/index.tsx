import { StatusBar } from 'expo-status-bar';
import {useState,useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from '../counter/styles';

export default function Timer(){
 const[hora, setHora]=useState(new Date());
 
 useEffect(() =>{
const interval=setInterval(()=>{
setHora(new Date());


},1000)
return () => clearInterval(interval); 
  }, []);
  const resetarHora = () => {
    const novaHora = new Date();
    novaHora.setMinutes(novaHora.getMinutes() - 10); 
    setHora(novaHora);
 };

 return(
<SafeAreaView style={styles.container}>
<StatusBar/>







</SafeAreaView>




 )

}