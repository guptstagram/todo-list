import React from 'react';

class ToDoItem extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="s12 m8 l6">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Things to do.....</h4></li>
                        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">delete_sweep</i></a></div></li>
                        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">delete_sweep</i></a></div></li>
                        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">delete_sweep</i></a></div></li>
                        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">delete_sweep</i></a></div></li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoItem;