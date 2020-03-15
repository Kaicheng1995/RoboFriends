import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import CardList from './CardList';
// import {robots} from './robots'
//robots export with no "default" so should add {} here
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';

import { createLogger } from 'redux-logger';

import thunkMiddleware from 'redux-thunk';




// ReactDOM.render(
// 	<div>
// 		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// 		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// 		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// 		<Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
// 	</div>,
// 	document.getElementById('root'));
// // here id, name, email represents input variables



// ReactDOM.render(
// 	<CardList robots={robots}/>, document.getElementById('root'));
// //左边robots为 CardList.js里公式的input变量，右边的robots是源文件的数据，即上面import的内容。


const logger = createLogger();

// 融合两个reducer
const rootReducer = combineReducers({ searchRobots, requestRobots });

// STORE: A BIG OBJECT THAT DESCRIBE THE STATE OF APP
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
//create main JS
serviceWorker.unregister();


