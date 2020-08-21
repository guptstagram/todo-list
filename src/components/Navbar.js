import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navbar extends React.Component{
    render(){
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                    ToDo App
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;