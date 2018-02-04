import React, { Component } from 'react';
import MenuLayout from '../components/menu-layout';
import MenuBar from '../components/menu-bar';
import Logged from '../components/logged';
import Options from '../components/options';

class Home extends Component {

    state = {
        optionsVisivility: false
    }

    openOptions = (event) => {
        this.setState({
            optionsVisivility: !this.state.optionsVisivility
        });
    };

    render() {
        return (
            <MenuLayout>
                <MenuBar iconLogger={<Logged />} openOptions={this.openOptions} />
                <Options optionsVisivility={this.state.optionsVisivility} ></Options>
            </MenuLayout>
        );
    }
}

export default Home;