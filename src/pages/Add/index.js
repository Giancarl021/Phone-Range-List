import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { Container, Text } from './styles';


export default function() {
    return (
        <Container>
            <Header/>
            <Text>Form</Text>
        </Container>
    );
}