import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const Options = (props) => {
    return (
        <Drawer
            docked={true}
            open={props.optionsVisivility}
            containerStyle={{ 
                left: '10px', 
                top: '75px', 
                // 'backgroundColor': '#7DF4A6' 
            }}
            zDepth={5}
        >
            <MenuItem>PACIENTES</MenuItem>
            <MenuItem>TRATAMIENTO</MenuItem>
            <MenuItem>CONTROL</MenuItem>
            <MenuItem>ODONTOGRAMA</MenuItem>
        </Drawer>
    )
}

export default Options;