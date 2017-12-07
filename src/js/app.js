import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import style from './../scss/all.scss';

import Header from './../js/todoList/header.js';
import Form from './../js/todoList/form.js';
import SearchList from './../js/todoList/listitem.js';

import Homepage from './../js/router/homepage.js';
import Contact from './../js/router/contact.js';

import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {text:[]}
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateList = this.updateList.bind(this);
    }
    render() {
        return (
        <div>
            <Header name= {'myTodoApp'}/>
            <Form getInputInfo = {this.handleChange}></Form>
            <SearchList mylist={this.state.text} deleteItem = {this.deleteItem} updateItem={this.updateList}></SearchList>
            
            <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
           
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/contact" component={Contact}/>
            </div>
            </Router>
        </div>
        );
    }
    handleChange(val){
        this.setState({
            text: [...this.state.text, val]
        })
    }
    deleteItem(pos){
        var arr = this.state.text;
        arr.splice(pos,1);
        this.setState({
            text:arr
        })     
    }
    updateList(pos,update){
        var arr = this.state.text;
        arr[pos] = update;
        this.setState({
            text:arr
        })     
    }
};



ReactDOM.render(<App/>,  document.getElementById("root"));