import React, { Component } from 'react';
import {  
  StyleSheet, 
  Text,  
  View,
} from 'react-native';

import IMCMsg from './imcMsg';

/*function calcIMC(peso, altura){
   let calc;
   calc = peso/(altura*altura);

   return calc;
 }*/
 
const IMCCalc = () => {
  const calcularImc = () =>{
    let calc;
    calc = this.state.peso/(this.state.altura*this.state.altura);
    return calc;
  }
  return(
    <View>
      <Text style = {styles.headerText}> Seu Imc é: {calcularImc()} <IMCMsg></IMCMsg>
      </Text>
    </View>
  );
}
 

const styles = StyleSheet.create({

  headerText:{
	 fontSize:20,
	 textAlign:"center",
	 margin:10,
 	 fontWeight:"bold"
  },

})

