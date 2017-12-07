import React from 'react';
import ReactDOM from 'react-dom';


export default class Header extends React.Component{
	constructor(props) {
		super(props);
        this.deleteList = this.deleteList.bind(this);
        this.updateList = this.updateList.bind(this);
        this.state = {itemText:''};
	}
	componentDidMount() {
		
    }
	render(){
        var arr = this.props.mylist
		return (
            <ul>
            <input className='todolist' value={this.state.itemText} onChange={this.updateList}></input>
            {arr.map((result,item) => {
                return (
                <div key={item}>
                <p>{result}</p>  
                <button key={item} onClick={ ()=> {this.deleteList(item)}}>Delete</button>
                <button key={item+1} onClick={ ()=> {this.updateConfirm(item,this.state.itemText)}}>Update</button>
                </div>)
            })}
          </ul>
        );
    }
    deleteList(item){
        this.props.deleteItem(item);
    }
    updateConfirm(item,result){
        if(result ===''){
            alert('please input eidt item');
        }else{
            this.setState({itemText:''})
            this.props.updateItem(item,result);
        } 
    }
    updateList(e){
        this.setState({itemText:e.target.value});
    }
}

