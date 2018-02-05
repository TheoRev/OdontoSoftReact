import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { DatePicker } from 'material-ui';

const FormPatient = (props) => {

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

    return (
        <Dialog
            title={props.titulo + " PACIENTE"}
            actions={actions}
            modal={true}
            open={props.openSate}
        >
            <TextField
                floatingLabelText="ID"
                disabled={true}
                value={21}
            />
            {/* <br /> */}
            <DatePicker
                floatingLabelText="Fec. Inscripción"
                autoOk={true}
                errorText={"Este campo es necesario"}
            />
            {/* <br /> */}
            <TextField
                floatingLabelText="Nombres y Apellidos"
                errorText={"Este campo es necesario"}
            />
        </Dialog>
    )
}

export default FormPatient;