import React, { Component } from 'react';
import superagent from 'superagent';
import PatientLayout from '../components/patient-layout';
import ListaPatients from '../components/lista-patients';
import FormPatient from '../components/form-patient';

class Patient extends Component {

    state = {
        patient: {
            ID: 0,
            date_init: '',
            nom_ape: "",
            age: "",
            masc: true,
            fem: false,
            sex: "",
            date_nac: "",
            address: "",
            ocupation: "",
            tel_cel: "",
            alergies: "",
            operations: "",
            diabettes: false,
            hipertension: false,
            others: "",
            treat_medics: "",
            state: true,
        },
        p1: {
            ID: 0,
            date_init: '',
            nom_ape: "",
            age: "",
            masc: true,
            fem: false,
            sex: "",
            date_nac: "",
            address: "",
            ocupation: "",
            tel_cel: "",
            alergies: "",
            operations: "",
            diabettes: false,
            hipertension: false,
            others: "",
            treat_medics: "",
            state: true,
        },
        p2: {
            ID: 0,
            date_init: '',
            nom_ape: "",
            age: "",
            masc: true,
            fem: false,
            sex: "",
            date_nac: "",
            address: "",
            ocupation: "",
            tel_cel: "",
            alergies: "",
            operations: "",
            diabettes: false,
            hipertension: false,
            others: "",
            treat_medics: "",
            state: true,
        },
        patients: [],
        titulo: '',
        openSate: false
    }

    handleOpenForm = (event) => {
        console.log('clicked in floatingButtton');
        this.setState({
            openSate: true,
            titulo: 'NUEVO'
        });
    }

    handleCloseForm = (event) => {
        this.setState({
            openSate: false
        });
    }

    intitPacientes = () => {
        // let p1 = this.state.patient;
        let moment = require('moment');

        var pac = [];

        this.state.p1.ID = 1;
        this.state.p1.date_init = moment(new Date()).format("YYYY-MM-DD");
        this.state.p1.nom_ape = 'THEO REVILLA FERNANDEZ';
        this.state.p1.age = 26;
        this.state.p1.sex = 'M';
        this.state.p1.date_nac = '1991-08-04';
        this.state.p1.address = 'AV GUARDIA CIVIL 145';
        this.state.p1.ocupation = 'PROGRAMMER';
        this.state.p1.tel_cel = '234328423';
        this.state.p1.alergies = '-';
        this.state.p1.operations = '-';
        this.state.p1.others = '-';
        this.state.p1.treat_medics = '-';
        this.state.p1.diabettes = true;

        this.state.p2.ID = 2;
        this.state.p2.date_init = moment(new Date()).format("YYYY-MM-DD");
        this.state.p2.nom_ape = 'ALMENDRA CARDENAS MESA';
        this.state.p2.age = 23;
        this.state.p2.sex = 'F';
        this.state.p2.date_nac = '1993-05-13';
        this.state.p2.address = 'LOS SAUCES 3EE';
        this.state.p2.ocupation = 'CONTADORA';
        this.state.p2.tel_cel = '45645643';
        this.state.p2.alergies = '-';
        this.state.p2.operations = '-';
        this.state.p2.hipertension = true;
        this.state.p2.others = '-';
        this.state.p2.treat_medics = '-';

        pac.push(this.state.p1);
        pac.push(this.state.p2);
        return pac;
    }

    componentDidMount() {
        superagent
            .get('http://192.168.1.35:3030/api/patients')
            .end((err, resp) => {
                const pacientes = JSON.parse(resp.text);
                this.setState({
                    patients: (pacientes != null) ? pacientes : intitPacientes()
                });
                console.log(this.state.patients);
            });
    }

    render() {
        // this.intitPacientes();

        return (
            <PatientLayout>
                <ListaPatients patients={this.state.patients} handleOpenForm={this.handleOpenForm} />
                <FormPatient openSate={this.state.openSate} titulo={this.state.titulo} handleCloseForm={this.handleCloseForm} />
            </PatientLayout>
        )
    }
}

export default Patient;