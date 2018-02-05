import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const MenuBar = (props) => {
    return (
        <AppBar
            title="OdontoSoft"
            iconElementRight={props.iconLogger}
            onLeftIconButtonClick={props.openOptions}
            zDepth={3}
        />
    );
}

export default MenuBar;