import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Button, Title } from './styles';

export default function(props) {

    const navigation = useNavigation();
    const { title } = props;

    return (
        <Container>
            <Button icon="arrow-left" onClick={navigation.goBack}/>
            <Title>{title}</Title>
            <Button icon="check" onClick={navigation.goBack}/>
        </Container>
    );
}