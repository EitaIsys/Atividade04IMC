import React, { Component } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  TextInput,
  
} from 'react-native';

import IMC from '../imc/imcApp';
import Cadastro from '../cadastro/Cadastro';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    
    return (
      <View style = {styles.container}>
	      <Text style = {styles.headerText}>
	        Aqui estão seus dados pessoais
	      </Text>

        <Text></Text>
	       
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container:{
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

});