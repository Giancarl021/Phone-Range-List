import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Label, Form, Header, Button, Title } from './styles';
import { formatNumber } from '../../util/format';
import { addToArray } from '../../util/LocalStorage';

export default function() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [quantity, setQuantity] = useState('100');
    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <Button icon="arrow-left" onClick={navigation.goBack}/>
                <Title>Criar lista telefônica</Title>
                <Button disabled={!isValid} icon="check" onClick={saveList}/>
            </Header>
            <Form>
                <Label>Nome da Lista</Label>
                <Input autoCorrect={false} onChangeText={text => validate({name: text})}/>
                <Label>Primeiro número</Label>
                <Input valid={isValid} autoCompleteType="tel" keyboardType="phone-pad" placeholder="(XX) XXXXX-XXXX" defaultValue={number} onChangeText={text => validate({number: text})}/>
                <Label>Quantidade de números</Label>
                <Input defaultValue={quantity ? String(quantity) : ''} keyboardType="number-pad" onChangeText={text => validate({quantity: text})}/>
            </Form>
        </Container>
    );

    function validate(input) {
        const data = { name, number, quantity }
        if(input) {
            if(input.hasOwnProperty('name')) {
                setName(input.name);
                data.name = input.name;
            } else if(input.hasOwnProperty('number')) {
                setNumber(input.number);
                data.number = input.number;
            } else if(input.hasOwnProperty('quantity')) {
                setQuantity(Number(input.quantity) || 0);
                data.quantity = Number(input.quantity);
            }
        }

        if((!data.name) || (!data.number) || (!data.quantity)) {
            setIsValid(false);
            return;
        }

        console.log(data.number);

        if(data.quantity > 300) {
            setQuantity(300);
            setIsValid(true);
            return;
        }

        const formattedNumber = formatNumber('+55' + data.number.replace(/\D/g, ''));
        if(!formattedNumber) {
            setIsValid(false);
            return;
        } else {
            setIsValid(true);
            setNumber(formattedNumber);
            return;
        }
    }

    async function saveList() {
        if(!validate()) return;
        if(!isValid) return;
        const numbers = [];
        const first = Number(number.replace(/\D/g, ''));
        const q = quantity;
        for(let i = 0; i < quantity; i++) {
            numbers.push({name: '', number: '+' + (first + i)});
        }

        await addToArray('lists', {
            id: Date.now().toString(16),
            name,
            numbers
        });
    }
}