var React = require('react'), 
	ReactDOM = require('react-dom'),
	marked = require('marked'), 
	$ = require('jquery');

var About = React.createClass({
	render: function() {
		return (
			<h1>About</h1>
		)
	}
});

var Inbox = React.createClass({
	render: function() {
		return (
			<h1>Inbox</h1>
		)
	}
})

var Home = React.createClass({
	render: function() {
		return (
			<h1>Home</h1>
		)
	}
})

var App = React.createClass({
	
	getInitialState: function() {
		console.log(window.location)
   		return {
      		route: window.location.hash.substr(1)
    	}
  	},

  	componentDidMount: function() {
    	window.addEventListener('hashchange', () => {
      		this.setState({
        		route: window.location.hash.substr(1)
      		})
    	})
  	},

  	render: function() {
  		"use strict";
  		console.log('Got here first');
    	let Child
    	switch (this.state.route) {
      		case '/about': Child = About; break;
      		case '/inbox': Child = Inbox; break;
     	 	default:      Child = Home;
    	}

    	return (
      		<div>
        		<h1>App</h1>
        		<ul>
          			<li><a href="./about">About</a></li>
          			<li><a href="./inbox">Inbox</a></li>
        		</ul>
        		<Child/>
      		</div>
    	)
  	}
})

console.log('JDIKJHDK');
ReactDOM.render(
    <App />,
  	document.getElementById('content')
);

