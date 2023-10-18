import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home";
import DetailsScreen
 from "../screens/details";
 import SettingsScreen
 from "../screens/settings";

 const Stack = createNativeStackNavigator();

 function Rotas(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Configurações" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }

 export default Rotas;