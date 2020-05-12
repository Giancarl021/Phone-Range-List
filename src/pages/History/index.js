import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../components/StatusBar';
import Button from '../../components/Button';
import { Light } from '../../common/colors';
import { Container, Header, Title, Footer, Registers } from './styles';
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
                <Button disabled={loading} icon="arrow-left" onClick={navigation.goBack} />
                <Title>{formatNumber(number)}</Title>
            </Header>
            <Registers
                    data={[1,2,3,4,5,6,7,8,9,10,11,12,13,22,23,24,25,26,27,28,29,210,211,212]}
                    keyExtractor={register => String(register)}
                    showsVerticalScrollIndicator={false}
    renderItem={({ item: register }) => (<Title>{register}</Title>)}
            />
            <Footer>
                <Button icon="plus" onClick={() => {}}></Button>
            </Footer>
        </Container>
    );
}