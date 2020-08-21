import React from 'react';
import Navbar from './components/Navbar';
import ToDoItem from './components/ToDoItemComponent';
import AddToDoButton from './components/AddToDoButton'

class App extends React.Component{
  state={
    todos:["yeh kr", "yeh mt kr"]
  }
  render(){
    return(
      <div className="App">
        <Navbar/>
        <ToDoItem todos={this.state.todos}/>
        <AddToDoButton/>
      </div>
    );
  }
}

export default App;
