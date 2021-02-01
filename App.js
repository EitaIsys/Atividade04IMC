import * as React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  TextInput,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import IMC from './components/imc/imcApp';
import Sobre from './components/sobre/Sobre';
import Cadastro from './components/cadastro/Cadastro';

// or any pure javascript modules available in npm

function Home ({ navigation }) {
    return(
      <View style = {styles.container}>
      <Text style = {styles.headerText}>
	      Atividade calculadora 
	    </Text>

      <View style={styles.viewButton}>
	        <Button 
          title = "Cadastro"
          onPress={() => navigation.navigate('Cadastro')}/>
      </View>

      <View style={styles.viewButton}>
	        <Button 
          title = "Calcular IMC"
          onPress={() => navigation.navigate('Imc')}/>
      </View>

      <View style={styles.viewButton}>
	      <Button 
        title = "Sobre"
        onPress={() => navigation.navigate('Sobre')}/>
      </View>

    </View>

    ); 
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Imc" component={IMC} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>       
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1, 
	  justifyContent:"center",
	  alignltems:"center",
	  backgroundColor:"#f5e5e5",
  },
  headerText:{
	 fontSize:20,
   color: "darkblue",
	 textAlign:"center",
	 margin:10,
 	 fontWeight:"bold"
  },
  viewButton: {
	  width:"93%",
	  margin:15,
    marginBottom: 20,
    fontSize: 20,
	  //backgroundColor:"red"
  }
});
