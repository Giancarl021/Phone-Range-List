import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../components/StatusBar';
import Button from '../../components/Button';
import { Light } from '../../common/colors';
import { Container, Header, Title } from './styles';

export default function () {
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor={Light.Background}></StatusBar>
            <Header>
                <Button disabled={loading} icon="arrow-left" onClick={navigation.goBack}/>
                <Title>Número de Telefone</Title>
            </Header>
        </Container>
    );
}