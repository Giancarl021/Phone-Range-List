import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Label, Form, Header, Button, Title } from './styles';
import { formatNumber } from '../../util/format';
import { addToArray } from '../../util/LocalStorage';

export default function() {
    const [number, setNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [quantity, setQuantity] = useState('100');
    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <Button icon="arrow-left" onClick={navigation.goBack}/>
                <Title>Criar lista telefônica</Title>
                <Button icon="check" onClick={saveList}/>
            </Header>
            <Form>
                <Label>Nome da Lista</Label>
                <Input autoCorrect={false}/>
                <Label>Primeiro número</Label>
                <Input valid={isValid} autoCompleteType="tel" keyboardType="phone-pad" placeholder="+XX (XX) XXXXXXXXX" defaultValue={number} onBlur={verifyNumber} onChangeText={setNumber}/>
                <Label>Quantidade de números</Label>
                <Input defaultValue={String(quantity)} onChangeText={text => {setQuantity(Number(text))}}/>
            </Form>
        </Container>
    );

    function verifyNumber() {
        const formattedNumber = formatNumber('+' + number.replace(/\D/g, ''));
        console.log(number, formattedNumber);
        if(!formattedNumber) {
            setIsValid(false);
        } else {
            setIsValid(true);
            setNumber(formattedNumber);
        }
    }

    function saveList() {
        const numbers = [];
        const first = number.replace(/\D/g, '');
        const q = quantity;
        console.log(first, q);
        for(let i = Number(first); i < first + q; i++) {
            numbers.push(i);
        }
        // await addToArray('lists', {

        // });
    }
}