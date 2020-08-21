import React from 'react';
import "./AddToDoButton.css";

class AddToDoButton extends React.Component{
    render(){
        return(
            <div>
                <a className="btn-floating btn-large waves-effect waves-light red pos-bottom" href="#modal1"><i className="material-icons">add</i></a>

                <div id="modal1" className="modal bottom-sheet">
                    <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddToDoButton;