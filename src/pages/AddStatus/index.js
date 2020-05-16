import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Form, Header, Button, Title } from './styles';
import { formatNumber, unformatNumber } from '../../util/format';
import { addToPhoneList } from '../../services/LocalStorage';
import StatusBar from '../../components/StatusBar';
import { Light } from '../../common/colors';
import { Status } from '../../util/status';

export default function() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [quantity, setQuantity] = useState('100');
    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar backgroundColor={Light.Background} />
            <Header>
                <Button icon="arrow-left" onClick={navigation.goBack}/>
                <Title>Criar lista telefônica</Title>
                <Button disabled={!isValid} icon="check" onClick={saveList}/>
            </Header>
            <Form>
                
            </Form>
        </Container>
    );

    function validate(input) {
        const data = { name, number, quantity }
        let valid = false;
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

        if(data.quantity > 300) {
            setQuantity(300);
            valid = true;
        }

        const formattedNumber = formatNumber(data.number);
        if(!formattedNumber) {
            valid = false;
            return;
        } else {
            valid = true;
            setNumber(formattedNumber);
        }

        if((!data.name) || (!data.number) || (!data.quantity)) {
            valid = false;
        }
        setIsValid(valid);
    }

    async function saveList() {
        const numbers = [];
        const first = Number(number.replace(/\D/g, ''));
        for(let i = 0; i < quantity; i++) {
            numbers.push({name: '', number: unformatNumber(first + i)});
        }
        try {
            await addToPhoneList({
                id: Date.now().toString(16),
                name,
                numbers,
                lastStatus: Status.UNDEFINED
            });
        } catch(err) {
            console.log(err);
        }
        navigation.goBack();
    }
}