import { useState } from "react";
import { Button, SafeAreaView, StatusBar,Text } from "react-native";

export default function Counter (){
const[counter, setCounter]= useState(0);




return <SafeAreaView>
<StatusBar/>

<Text>Contador :{counter} </Text>
<Button title= "Incrementar" onPress={()=>{setCounter(counter+1)
}}/>
<Button title= "Decrementar" onPress={()=>{setCounter(counter-1)
}}/>
<Button title= "Zerar" onPress={()=>{setCounter(0)
}}/>


</SafeAreaView>

}