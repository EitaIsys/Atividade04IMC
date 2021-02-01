import React, { Component } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  TextInput,
  
} from 'react-native';

//import IMCCalc from './IMCCalc';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {peso:0, altura:0,result:0, resultText:""};
    this.calcularImc = this.calcularImc.bind(this);
    //this.exibirMsg - this.exibirMsg.bind(this);
  }

  calcularImc(){
    let calc;
    calc = this.state.peso / (this.state.altura * this.state.altura);

    let r = this.state;
    r.result = calc;
   
    if( r.result < 17 ){
      r.resultText = 'Muito abaixo do peso';
    }else if( r.result < 18.49 ){
      r.resultText = 'Abaixo do peso'
    }else if( r.result < 24.9 ){
      r.resultText = 'Peso normal';
      this.setState({imcNormal: true});
    }else if( r.result < 29.99 ){
      r.resultText = 'Acima do peso'
    }else if( r.result < 34.99 ){
      r.resultText = 'Obesidade I'
    }else if( r.result < 39.99){
      r.resultText = 'Obesidade II(Severa)'
    }else{
      r.resultText = 'Obesidade III(Mórbida)'
    }
    this.setState(r)
  }

  render() {
    const imcNormal = this.state.imcNormal;
    let exibirMsg;

    if (imcNormal) {
      exibirMsg = <Text style={styles.blueColorText}>{this.state.resultText}</Text>;
    }else {
      exibirMsg = <Text style={styles.redColorText}>{this.state.resultText}</Text>;
    }

    return (
      <View style = {styles.container}>
	      <Text style = {styles.headerText}>
	        Calculadora de IMC 
	      </Text>

	      <TextInput
	        style = {styles.textInput}
          keyboardType="numeric"
	        onChangeText = {(peso) => {this.setState ({peso})}}
	        placeholder = "Digite o peso"
	      />

        <TextInput
	        style = {styles.textInput}
          keyboardType="numeric"
	        onChangeText = {(altura) => {this.setState ({altura})}}
	        placeholder = "Digite a altura"
	      />
        <View style={styles.viewButton}>
	        <Button
	          title = "Calcular"
	          onPress = {this.calcularImc}
	        />
          
          <Text style={styles.viewButton}>Seu IMC é: {this.state.result.toFixed(2)}</Text>
          {exibirMsg}            
        

        </View>

        
        
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

  textInput:{
	  height:45,
	  weidth:"95%",
	  borderColor:"gray",
	  borderWidth:3,
    marginBottom: 20,
	  paddingLeft:20
  },
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

  viewButton:{
	  width:"93%",
	  margin:15,
    marginBottom: 20,
    fontSize: 20,
	  //backgroundColor:"red"
  }
});