import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import PhoneItem from '../../components/PhoneItem';
import { Container, List as PhoneList, Header, Title, SimpleText } from './styles';


export default function(props) {
    const { name, numbers } = props.route.params;
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setList(numbers || []);
        setLoading(false);
    }, []);

    return (
        <Container>
            <Header>
                <Button disabled={loading} icon="arrow-left" onClick={navigation.goBack}/>
                <Title>{name}</Title>
            </Header>
            { list.length ? <PhoneList
                data={list}
                keyExtractor={phone => phone.number}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: phone }) => (
                    <PhoneItem name={phone.name || 'Sem nome'} number={phone.number} onEdit={() => {}}/>
                )}
            /> : <SimpleText>Carregando números...</SimpleText>}
        </Container>
    );
}