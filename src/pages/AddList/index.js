import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container, Input, Label, Form } from './styles';
import { formatNumber } from '../../util/format';

export default function() {
    const [number, setNumber] = useState('');
    const [isValidNumber, setIsValidNumber] = useState(true);
    return (
        <Container>
            <Header title="Adicionar Lista Telefônica"/>
            <Form>
                <Label>Nome da Lista</Label>
                <Input autoCorrect={false}/>
                <Label>Primeiro número</Label>
                <Input autoCompleteType="tel" keyboardType="phone-pad" placeholder="+XX XX XXXXXXXXX" value={number} onBlur={verifyNumber} onChangeText={setNumber}/>
                <Label>Quantidade de números</Label>
                <Input defaultValue="100"/>
            </Form>
        </Container>
    );

    function verifyNumber(number) {
        console.log(number);
        const formattedNumber = formatNumber(number);
        if(!formattedNumber) {
            setIsValidNumber(false);
            setNumber('');
        } else {
            setIsValidNumber(true);
            setNumber(formattedNumber);
        }
    }
}