import React from 'react';

class ToDoItem extends React.Component{

    deleteButtonClicked=()=>{
        console.log("hkjk");
    }
    componentDidMount=()=>{
        let todos=this.props.todos.forEach(todo=>{
            <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">delete_sweep</i></a></div></li>
        })
        console.log(todos);
    }
    render(){
        // let {todos}=this.props;
        // let todos=this.props.todos.forEach(todo=>{
        //     <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">delete_sweep</i></a></div></li>
        // })
        // console.log(todos);
        return(
            <div className="container">
                <div className="row">
                    <div className="s12 m8 l6">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Things to do.....</h4></li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoItem;