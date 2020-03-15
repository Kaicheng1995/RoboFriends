import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import CardList from './CardList';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import {robots} from './robots'
//robots export with no "default" so should add {} here

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


ReactDOM.render(
	<App />, document.getElementById('root'));
//create main JS
serviceWorker.unregister();
