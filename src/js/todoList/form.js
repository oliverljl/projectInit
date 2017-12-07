import React from 'react';
import ReactDom from 'react-dom';

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {text:'',childstate:''};
        this.handleChange = this.handleChange.bind(this);
        this.getInputInfo = this.getInputInfo.bind(this);
    
    }
    componentDidMount() {
		
    }
	render(){
		return (
            <div>
            <input onChange= {this.handleChange} value= {this.state.text}/>
            <button onClick={this.getInputInfo}>submit</button>
            </div>
	    );
    }
    handleChange(e){
        this.setState({text:e.target.value});
    }
    getInputInfo(e){
        e.preventDefault();
        var value = this.state.text;
        if(value === ''){
            alert('please input add item');
        }else{
            this.setState({text:''});
            this.props.getInputInfo(value); 
        } 
    }
   
}