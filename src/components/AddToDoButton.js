import React from 'react';
import "./AddToDoButton.css";

class AddToDoButton extends React.Component{

    addTodoButtonClickedHere=()=>{
        let todo=document.querySelector("#todoInput").value;
        if(todo!==""){
            document.querySelector("#todoInput").value="";
            this.props.addTodoButtonClicked(todo);
        }
    }

    componentDidMount=()=>{
        document.querySelector("#todoInput").addEventListener("keyup",(e)=>{
            if(e.keyCode===13) this.addTodoButtonClickedHere();
        })
    }

    render(){
        return(
            <div className="add-task-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col s8">
                            <input placeholder="Add To Do" id="todoInput" type="text" className="validate"/>
                        </div>
                        <div className="col s4 left">
                            <div className="add-button">
                                <div className="btn-floating btn-large waves-effect waves-light red" onClick={this.addTodoButtonClickedHere}><i className="material-icons">add</i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddToDoButton;