import React, { Component } from 'react';
import PatientLayout from '../components/patient-layout';
import ListaPatients from '../components/ListaPatients';

class Patient extends Component {
    render() {
        return (
            <PatientLayout>
                <ListaPatients />
            </PatientLayout>
        )
    }
}

export default Patient;