import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from '../pages/containers/home';
import Menu from '../menu/containers/menu';


const homeContainer = document.getElementById('home-container');

render(
    <MuiThemeProvider>
        <Home />
    </MuiThemeProvider>, homeContainer);