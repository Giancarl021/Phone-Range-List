import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Header, List as PhoneList, SimpleText } from './styles';

import PhoneItem from '../../components/PhoneItem';
import AddButton from '../../components/AddButton';
import { getData, setData } from '../../util/LocalStorage';

export default function() {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        getData('lists').then(setLists)
    }, []);

    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <Title>Listas Telefônicas</Title>
            </Header>
            { lists.length > 0 ?
                <PhoneList
                data={lists}
                keyExtractor={person => person.number}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: person }) => (
                    <PhoneItem name={person.name || 'Sem nome'} number={person.number} onEdit={() => {}} onDelete={() => {}}/>
                )}
                /> :
                <SimpleText>Parece que não tem nenhuma lista salva ainda...</SimpleText>
            }
            <AddButton onClick={() => navigation.navigate('AddList')}/>
        </Container>
    );
}