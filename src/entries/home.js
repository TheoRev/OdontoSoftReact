import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from '../pages/containers/home';

const homeContainer = document.getElementById('home-container');

render(
    <MuiThemeProvider>
    <Home/>
</MuiThemeProvider>, homeContainer)