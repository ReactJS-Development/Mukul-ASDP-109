import React, { Component } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import Welcome from './Welcome';

class Home extends Component {

	constructor (props) {
		super(props);
		this.state= {value: 100, names: ["Mukul","Sanjeev", "Surender", "Sumit"], newName: "Enter a Name"};
		setInterval(() =>{this.setState({value: this.state.value + 1});},1000);
	}

	increament = () => {
		this.setState({value: this.state.value + 1});
	}

	reset = () => {
		this.setState({value: 100});
	}

	newNameHandler = () => {
		this.state.names.push(this.state.newName);
		this.setState({newName : "Enter a new Name"});
	}

	onNameChangeHnadler = (event) => {
		this.setState({newName : event.target.value});
	}

	render() {
		return(
			<div>
				<Header height="200" width="200"/>
				<Welcome newNameHandler={this.newNameHandler} onNameChangeHnadler = {this.onNameChangeHnadler} value={this.state.value} increamentHandler={this.increament} resetHandler={this.reset} userNames={this.state.names} newNameValue={this.state.newName}/>
				<MainBody firstName="Mukul" lastName="Sharma" city="Noida"/>
				<MainBody firstName="Surender" lastName="Sharma" city="Gurgaon"/>
				<Footer />
			</div>
		);
	}
}
export default Home;