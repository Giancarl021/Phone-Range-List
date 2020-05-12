import React from 'react';
import { StatusName } from '../../util/status';
import { Container, Text, Status, Divisor } from './styles';
import Button from '../../components/Button';

export default function(props) {
    const { date, statusCode } = props;

    const buttonSize = 24;

    return (
        <Container>
            <Text>{date ? Intl.DateTimeFormat('pt-br').format(new Date(date)) : 'Sem data definida'}</Text>
            <Status statusCode={statusCode || 0}>{StatusName[statusCode || 0]}</Status>
            <Button icon="edit-2" onClick={() => {}} size={buttonSize}/>
            <Button icon="trash-2" onClick={() => {}} size={buttonSize}/>
        </Container>
    );
}