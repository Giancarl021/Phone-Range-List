import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../components/StatusBar';
import Button from '../../components/Button';
import { Light } from '../../common/colors';
import { Container, Header, Title, Footer } from './styles';
import { formatNumber } from '../../util/format';

export default function (props) {
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        setLoading(false);
    }, []);

    const { number } = props.route.params;

    return (
        <Container>
            <StatusBar backgroundColor={Light.Background}></StatusBar>
            <Header>
                <Button disabled={loading} icon="arrow-left" onClick={navigation.goBack}/>
                <Title>{formatNumber(number)}</Title>
            </Header>
            <Footer>
                <Button icon="trash-2" onClick={() => {}}></Button>
            </Footer>
        </Container>
    );
}