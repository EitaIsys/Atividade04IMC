import React from 'react';
import {  
  StyleSheet, 
  Text,
  View,  
} from 'react-native';

const IMCMsg = () => {
  const imcMsg = (calc) => {
    if( calc < 17 ){
     return <Text style = {styles.redColorText}>"Muito abaixo do peso"</Text>
    }else if( calc < 18.49 ){
     return <Text style = {styles.redColorText}>"Abaixo do peso"</Text>
    }else if( calc < 24.9 ){
     return <Text style = {styles.blueColorText}>"Peso normal"</Text>
    }else if( calc < 29.99 ){
     return <Text style = {styles.redColorText}>"Acima do peso"</Text>
    }else if( calc < 34.99 ){
     return <Text style = {styles.redColorText}>"Obesidade I"</Text>
    }else if( calc < 39.99){
     return <Text style = {styles.redColorText}>"Obesidade II(Severa)"</Text>
    }else{
     return <Text style = {styles.redColorText}>"Obesidade III(Mórbida)"</Text>
    }
  }
}
/*
function  msgIMC(calc){
    if( calc < 17 ){
     return <Text style = {styles.redColorText}>"Muito abaixo do peso"</Text>
    }else if( calc < 18.49 ){
     return <Text style = {styles.redColorText}>"Abaixo do peso"</Text>
    }else if( calc < 24.9 ){
     return <Text style = {styles.blueColorText}>"Peso normal"</Text>
    }else if( calc < 29.99 ){
     return <Text style = {styles.redColorText}>"Acima do peso"</Text>
    }else if( calc < 34.99 ){
     return <Text style = {styles.redColorText}>"Obesidade I"</Text>
    }else if( calc < 39.99){
     return <Text style = {styles.redColorText}>"Obesidade II(Severa)"</Text>
    }else{
     return <Text style = {styles.redColorText}>"Obesidade III(Mórbida)"</Text>
    }  
  }
*/

const styles = StyleSheet.create({

  redColorText:{
	 fontSize:20,
   color: "#8b0000",
	 textAlign:"center",
	 margin:10,
 	 fontWeight:"bold",
  },
  blueColorText:{
	 fontSize:20,
   color: "#00ced1",
	 textAlign:"center",
	 margin:10,
 	 fontWeight:"bold",
  },
})