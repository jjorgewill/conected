import React, {Component} from 'react';
import {Text, Button, View} from 'react-native'; 

function Home(props){
	return(		
		
		<View> 
			<Text>{props.status.isConnected ? "Conectado" : "Desconectado" }</Text> 
			<Text>{props.status.carrier.carrier}</Text> 
		</View> 
		)	
}

export default Home
