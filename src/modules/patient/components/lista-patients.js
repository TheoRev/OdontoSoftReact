import React from 'react';
import { Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { greenA400, red400, green400 } from 'material-ui/styles/colors';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import './lista-patients.css';

const ListaPatients = (props) => {

    console.log(props.patients);

    let moment = require('moment');

    var f = moment(new Date(), 'DD/MM/YYYY').format();
    console.log(f);

    return (
        <Card zDepth={3}>
            <div className="header">
                <div className="titulo">
                    {/* <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>LISTA DE PACIENTES</h1> */}
                    <CardTitle title="LISTA DE PACIENTES" style={{ textAlign: 'center', fontWeight: 'bold' }} />
                </div>
                <div className="add">
                    <FloatingActionButton className="add-button" mini={true} zDepth={3} title="AÑADIR PACIENTE" onClick={props.handleOpenForm} >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>

            <Table
                selectable={false}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                // enableSelectAll={false}
                >
                    <TableRow hoverable={true} hovered={false}>
                        <TableHeaderColumn className="col-small-tam">ID</TableHeaderColumn>
                        <TableHeaderColumn className="col-medium-tam">Fec. Init.</TableHeaderColumn>
                        <TableHeaderColumn className="col-big-tam">Nom. Ape.</TableHeaderColumn>
                        <TableHeaderColumn className="col-small-tam">Edad</TableHeaderColumn>
                        <TableHeaderColumn className="col-small-tam">Sexo</TableHeaderColumn>
                        <TableHeaderColumn className="col-medium-tam">Telef / Cel</TableHeaderColumn>
                        <TableHeaderColumn className="col-medium-tam">Fec. Naci.</TableHeaderColumn>
                        <TableHeaderColumn className="col-small-tam">Diabe.</TableHeaderColumn>
                        <TableHeaderColumn className="col-small-tam">Hiper.</TableHeaderColumn>
                        <TableHeaderColumn className="action-column"></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} stripedRows={false} >
                    {
                        props.patients.map((p) => {
                            return (
                                <TableRow key={p.ID} hoverable={true} hovered={false}>
                                    <TableRowColumn className="col-small-tam">{p.ID}</TableRowColumn>
                                    <TableRowColumn className="col-medium-tam">
                                        {
                                            moment(p.date_init).format('DD/MM/YYYY')
                                        }
                                    </TableRowColumn>
                                    <TableRowColumn className="col-big-tam">{p.nom_ape}</TableRowColumn>
                                    <TableRowColumn className="col-small-tam">{p.age}</TableRowColumn>
                                    <TableRowColumn className="col-small-tam">{p.sex}</TableRowColumn>
                                    <TableRowColumn className="col-medium-tam">{p.tel_cel}</TableRowColumn>
                                    <TableRowColumn className="col-medium-tam">
                                        {
                                            moment(p.date_nac).format('DD/MM/YYYY')
                                        }
                                    </TableRowColumn>
                                    <TableRowColumn className="col-small-tam">{
                                        (p.diabettes) ?
                                            <NavigationCheck />
                                            : <NavigationClose />
                                    }</TableRowColumn>
                                    <TableRowColumn className="col-small-tam">{
                                        (p.hipertension) ?
                                            <NavigationCheck />
                                            : <NavigationClose />
                                    }</TableRowColumn>
                                    <TableRowColumn className="action-column">
                                        <div className="col-actions">
                                            <RaisedButton className="icon-style btn" title="Editar paciente" icon={<ContentCreate color={green400} />} />
                                            &nbsp;
                                            &nbsp;
                                            <RaisedButton className="icon-style" icon={<ActionDelete color={red400} />} />
                                        </div>
                                    </TableRowColumn>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </Card>
    );
}

export default ListaPatients;