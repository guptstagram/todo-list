import React from 'react';
import "./AddToDoButton.css";

class AddToDoButton extends React.Component{


    addTodoButtonClicked=()=>{
        console.log("inp");
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
                                <div className="btn-floating btn-large waves-effect waves-light red" onClick={this.addTodoButtonClicked}><i className="material-icons">add</i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddToDoButton;