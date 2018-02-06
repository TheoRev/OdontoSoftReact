import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { DatePicker } from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

import './form-patient.css';

const FormPatient = (props) => {
    // console.log(props);

    const styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            width: 500,
            height: 450,
            overflowY: 'auto',
            fontSize: '10pt',
        },
        rb: {
            display: 'inline !important',
        }
    };

    const actions = [
        <FlatButton
            label="CANCELAR"
            primary={true}
            onClick={props.handleCloseForm}
        />,
        <FlatButton
            label="GUARDAR"
            primary={true}
            disabled={true}
            onClick={props.handleCloseForm}
        />,

    ];

    let DateTimeFormat = global.Intl.DateTimeFormat;
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/fr');
    require('intl/locale-data/jsonp/fa-IR');
    let moment = require('moment');

    return (
        <Dialog
            title={props.titulo + " PACIENTE"}
            actions={actions}
            modal={true}
            open={props.openSate}
            autoScrollBodyContent={true}
            contentStyle={{ width: '80%', maxWidth: 'none' }}
        >
            <div className="grid">
                <div>
                    <TextField
                        floatingLabelText="ID"
                        disabled={true}
                        value={props.ID}
                    />
                    <DatePicker
                        floatingLabelText="Fec. Inscripción"
                        autoOk={true}
                        errorText={
                            (props.date_init != null) ? '' : props.msgValidator
                        }
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.date_init}
                        onChange={props.setDateInit}
                        formatDate={
                            new DateTimeFormat('es-PE', {
                                day: 'numeric',
                                month: 'numeric',
                                year: 'numeric',
                            }).format
                        }
                    />
                    <TextField
                        floatingLabelText="Nombres y Apellidos"
                        errorText={
                            (props.nom_ape != "") ? '' : props.msgValidator
                        }
                        fullWidth={false}
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.nom_ape}
                        onChange={props.setNomApe}
                    />
                    <br />
                    <TextField
                        type="number"
                        floatingLabelText="Edad"
                        errorText={
                            (props.age > 0 && props.age != null) ? '' : props.msgValidator
                        }
                        value={props.age}
                        onChange={props.setAge}
                    />
                    <RadioButtonGroup name="sex" defaultSelected="M"
                        valueSelected={props.sex}
                        onChange={props.setSex}
                        style={{ marginTop: '10px' }}
                    >
                        <RadioButton
                            value="M"
                            label="M"
                            style={{ fontSize: "10pt", marginBottom: "10pt" }}
                        />
                        <RadioButton
                            value="F"
                            label="F"
                            style={{ fontSize: "10pt" }}
                        />
                    </RadioButtonGroup>
                </div>
                <div>
                    <DatePicker
                        floatingLabelText="Fec. Nacimiento"
                        autoOk={true}
                        errorText={
                            (props.date_nac != null) ? '' : props.msgValidator
                        }
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.date_nac}
                        onChange={props.setFecNac}
                        locale="es-PE"
                        formatDate={
                            new DateTimeFormat('es-PE',{
                                day:'numeric',
                                month:'numeric',
                                year:'numeric',
                            }).format
                        }
                    />
                    <TextField
                        floatingLabelText="Dirección"
                        errorText={(props.address != '') ? '' : props.msgValidator}
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.address}
                        onChange={props.setAddress}
                    />
                    {/* <br/> */}
                    <TextField
                        floatingLabelText="Ocupación"
                        errorText={(props.ocupation != '') ? '' : props.msgValidator}
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.ocupation}
                        onChange={props.setOcupation}
                    />
                    {/* <br/> */}
                    <TextField
                        floatingLabelText="Telef. / Cel."
                        errorText={(props.tel_cel != '') ? '' : props.msgValidator}
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.tel_cel}
                        onChange={props.setTelefCel}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Alergias"
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.alergies}
                        onChange={props.setAlergies}
                    />
                    <TextField
                        floatingLabelText="Operaciones"
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.operations}
                        onChange={props.setOperations}
                    />
                    <br />
                    <br />
                    <Checkbox
                        label="Diabettes"
                        labelStyle={{ marginBottom: "10pt" }}
                        checked={props.diabettes}
                        onCheck={props.setDiabettes}
                    />
                    <Checkbox
                        label="Hipertension"
                        checked={props.hipertension}
                        onCheck={props.setHipertension}
                    />
                    <TextField
                        floatingLabelText="Otros"
                        multiLine={true}
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.others}
                        onChange={props.setOthers}
                    />
                    <TextField
                        floatingLabelText="Trat. Médicos"
                        multiLine={true}
                        inputStyle={{ fontSize: "10pt" }}
                        value={props.treat_medics}
                        onChange={props.setTreatMedics}
                    />
                </div>
            </div>
        </Dialog>
    )
}

export default FormPatient;