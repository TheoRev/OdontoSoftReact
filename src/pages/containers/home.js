import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';

import Menu from '../../menu/containers/menu';
import ContainerLayout from '../components/container-layout';
import Patient from '../../modules/patient/containers/patient';

class Home extends Component {

    openOptions = (event) => {
        this.props.actions.openOptions();
    };

    render() {
        return (
            <HomeLayout>
                <Menu openOptions={this.openOptions} />
                <ContainerLayout>
                    <br/>
                    <Patient />
                </ContainerLayout>
            </HomeLayout>
        );
    }
}

export default Home;