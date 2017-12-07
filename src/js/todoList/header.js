import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{
	constructor(props) {
		super(props);
	        
	}
	componentDidMount() {
		
    }
	render(){
		return (
            <header>
                <h1>{this.props.name}</h1>
            </header>
	    );
	}
}

