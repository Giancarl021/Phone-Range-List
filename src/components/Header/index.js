import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Container, ReturnButton, Title } from './styles';

export default function(props) {

    const route = useRoute();
    const navigation = useNavigation();
    const { title } = route.params;

    return (
        <Container>
            <ReturnButton icon="arrow-left" onClick={navigation.goBack}/>
            <Title>{title}</Title>
        </Container>
    );
}