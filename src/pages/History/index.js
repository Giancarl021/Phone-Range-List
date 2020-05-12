import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../components/StatusBar';
import Button from '../../components/Button';
import StatusItem from '../../components/StatusItem';
import { Light } from '../../common/colors';
import { Container, Header, Title, Footer, Registers, SimpleText } from './styles';
import { getStatusFromPhone } from '../../services/LocalStorage';
import { formatNumber } from '../../util/format';

export default function (props) {
    const [loading, setLoading] = useState(true);
    const [history, setHistory] = useState([]);

    const navigation = useNavigation();

    const { number, listId } = props.route.params;

    useEffect(() => {
        getStatusFromPhone(listId, number)
        .then(data => {
            setHistory(data);
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor={Light.Background}></StatusBar>
            <Header>
                <Button disabled={loading} icon="arrow-left" onClick={navigation.goBack} />
                <Title>{formatNumber(number)}</Title>
            </Header>
            { history.length ? 
            <Registers
                    data={history}
                    keyExtractor={(_, index) => String(index)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: register }) => (
                        <StatusItem date={register.date} statusCode={register.status || 0}/>
                    )}
            /> :
            <SimpleText>Parece que ainda não tem nenhum registro neste número...</SimpleText>}
            <Footer>
                <Button icon="plus" onClick={() => navigation.navigate('AddStatus', {listId, number})} />
            </Footer>
        </Container>
    );
}