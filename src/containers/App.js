import React from 'react';
// import {robots} from './robots';   换成接入API的形式
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../actions';



//what state I need to listen to and send down as props
const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,  //！！！因为有两个reducer，所以中间加reducer的名字
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	};
}
// what props I should listen to that are actions need to ger dispatched 
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
}


/**
* and because "App" owns the state, any component that has "state" uses the "class" syntax, so they can use the constructor function to
* create "this.state", and "state" is what describes the app
*/



class App extends React.Component {

	//state 相当于一个头部沟通器，通过constructor创建内容来沟通各个子component
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		// searchfield: ''
	// 	}
	// }


	componentDidMount() {
		// fetch('http://jsonplaceholder.typicode.com/users')
		// 	.then(response => response.json())
		// 	.then(users => this.setState({ robots: users}));
		this.props.onRequestRobots();
	}



	// //define a parent function for communication (use => in React when creating methods)
	// onSearchChange = (event) => {
	// 	this.setState({searchfield: event.target.value}) //event指实际输入的内容，setstate对state内容进行实时变更
	// }


	render() {
		// const { robots } = this.state;
		const { searchField, onSearchChange, robots, isPending } = this.props;
		//筛选所有的robots.name里，是否include 输入的内容
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})


		//loading bar
		return isPending ?
			<h1>loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>robofriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>  
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
				//将SearchBox里的input变成APP里的onSearchChange function，这样就和parent联系起来
			)
	}
}




// const App = () => {
// 	return (
// 		<div className='tc'>
// 			<h1>RoboFriends</h1>
// 			<SearchBox />	
// 			<CardList robots={robots}/>
// 		</div>

// 	);
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
