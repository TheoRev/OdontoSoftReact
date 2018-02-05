import React from 'react';
import { render } from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from '../pages/containers/home';
import Menu from '../menu/containers/menu';


const homeContainer = document.getElementById('home-container');

render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Home />
    </MuiThemeProvider>, homeContainer);