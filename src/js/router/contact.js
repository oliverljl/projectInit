import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Product from './subprod.js';
import User from './subuser.js'
export default class Contact extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    
    }
    render(){

        return(
            <div>
            <p>Contact! emergency! Reach Me!!!</p>
            <Router>
            <Switch>
                <Route path={this.props.match.path} component={Product}/>
                <Route path = {`${this.props.match.path}/:userId`} component={User}/>
            </Switch>
            </Router>
            </div>
        );
    }
}