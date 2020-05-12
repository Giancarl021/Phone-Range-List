import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import PhoneItem from '../../components/PhoneItem';
import { Container, List as PhoneList, Header, Title, SimpleText } from './styles';
import StatusBar from '../../components/StatusBar';
import { Main } from '../../common/colors';

export default function(props) {
    const { name, numbers, listId } = props.route.params;
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setList(numbers || []);
        setLoading(false);
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor={Main.Background}/>
            <Header>
                <Button disabled={loading} icon="arrow-left" onClick={navigation.goBack}/>
                <Title>{name}</Title>
            </Header>
            { list.length ? <PhoneList
                data={list}
                keyExtractor={phone => phone.number}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: phone }) => (
                    <PhoneItem listId={listId} name={phone.name || 'Sem nome'} number={phone.number} status={phone.status} onEdit={() => {}}/>
                )}
            /> : <SimpleText>Carregando números...</SimpleText>}
        </Container>
    );
}