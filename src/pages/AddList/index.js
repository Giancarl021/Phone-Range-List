import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Label, Form, Header, Button, Title } from './styles';
import { formatNumber } from '../../util/format';
import { addToArray } from '../../util/LocalStorage';

export default function() {
    const [number, setNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const navigation = useNavigation();
    
    return (
        <Container>
            <Header>
                <Button icon="arrow-left" onClick={navigation.goBack}/>
                <Title>Criar lista telefônica</Title>
                <Button icon="check" onClick={navigation.goBack}/>
            </Header>
            <Form>
                <Label>Nome da Lista</Label>
                <Input autoCorrect={false}/>
                <Label>Primeiro número</Label>
                <Input valid={isValid} autoCompleteType="tel" keyboardType="phone-pad" placeholder="(XX) XXXXXXXXX" value={number} onBlur={verifyNumber} onChangeText={setNumber}/>
                <Label>Quantidade de números</Label>
                <Input defaultValue="100"/>
            </Form>
        </Container>
    );

    function verifyNumber() {
        const formattedNumber = formatNumber(number.replace(/\D/g, ''));
        if(!formattedNumber) {
            setIsValid(false);
        } else {
            setIsValid(true);
            setNumber(formattedNumber);
        }
    }

    async function saveList() {
        const numbers = [];

        

        await addToArray('lists', {

        });
    }
}