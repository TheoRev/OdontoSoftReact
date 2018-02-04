import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const ListaPatients = (props) => {
    return (
        <Card zDepth={3}>
            <CardHeader
                title="LISTA DE PACIENTES"
                actAsExpander={false}
                showExpandableButton={false}
            />
        </Card>
    );
}

export default ListaPatients;