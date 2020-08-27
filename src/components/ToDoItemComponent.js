import React from 'react';
import "./ToDoItemComponent.css";

class ToDoItem extends React.Component{

    render(){
        let {todos, deleteButtonClicked}=this.props;

        const todosJSX=todos.length?(
            todos.map(todo=>{
                return(
                    <li className="collection-item" key={todo.id}>
                        <div>
                            {todo.content}
                            <div className="secondary-content delIcon" onClick={()=>{deleteButtonClicked(todo.id)}}>
                                <i className="material-icons">delete_sweep</i>
                            </div>
                        </div>
                    </li>
                )
            })
        ):(
            <li className="collection-header"><h6>Nothing to Do mate. Enjoy!</h6></li>
        )
        return(
            <div className="todoComponent">
                <div className="container">
                    <div className="row">
                        <div className="s12 m8 l6">
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Things to do.....</h4></li>
                            {todosJSX}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoItem;