import React from 'react';
import Navbar from './components/Navbar';
import ToDoItem from './components/ToDoItemComponent';
import AddToDoButton from './components/AddToDoButton'

class App extends React.Component{
  state={
    todos:[
      {id:1,content:"yeh kr"},
      {id:2,content:"yeh mat kr"}]
  }

  deleteButtonClicked=(id)=>{
    const todos=this.state.todos.filter((todo)=>{
      return todo.id!==id;
    })
    this.setState({
      todos:todos
    })
  }


  addTodoButtonClicked=(inp)=>{
    const todos=[
      ...this.state.todos,
      {
        id:this.state.todos.length+1,
        content:inp
      }
    ]
    this.setState({
      todos:todos
    })
  }

  render(){
    return(
      <div className="App">
        <Navbar/>
        <ToDoItem todos={this.state.todos} deleteButtonClicked={this.deleteButtonClicked}/>
        <AddToDoButton addTodoButtonClicked={this.addTodoButtonClicked}/>
      </div>
    );
  }
}

export default App;
