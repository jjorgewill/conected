import DeviceInfo from 'react-native-device-info';
import {Alert,PermissionsAndroid, NetInfo } from 'react-native';   
import React, { PureComponent } from 'react';
import Home from '../screens/containers/home'


class Connector extends PureComponent{ 
  	constructor(props) {
    	super(props);  
    	self = this
    	this.state = { isConnected: false }  
    	this.state = { carrier: self.getCarrier }  
  	}
	async getCarrier(){
		const carrier = DeviceInfo.getCarrier();
		return carrier
	} 
	componentDidMount() {
		self = this 
	    NetInfo.isConnected.addEventListener('connectionChange', self.handleConnectivityChange);
	    NetInfo.isConnected.fetch().done((isConnected) => {self.setState({isConnected})});
	  }

	componentWillUnmount() {
		self = this 
		NetInfo.isConnected.removeEventListener('connectionChange', self.handleConnectivityChange);
	}
	handleConnectivityChange = (isConnected) => { 
		this.setState({ isConnected }) 
	}
	render() {
		return(
			<Home status={this.state}></Home>
		) 
	}
 
}

export default Connector

