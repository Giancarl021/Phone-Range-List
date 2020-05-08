import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Header, List as PhoneList, SimpleText } from './styles';

import PhoneItem from '../../components/PhoneItem';
import AddButton from '../../components/AddButton';

export default function() {

    const [people, setPeople] = useState([
        {
            name: 'Jerusa Fontela da Luz',
            number: '+5551999503886'
        }
    ]);

    const navigation = useNavigation();

    function onAdd(name, number) {
        setPeople(...people, { name, number });
    }

    return (
        <Container>
            <Header>
                <Title>Números Telefônicos</Title>
            </Header>
            { people.length > 0 ? (
                <PhoneList
                data={people}
                keyExtractor={person => person.number}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: person }) => (
                    <PhoneItem name={person.name || 'Jerusa Fontela da Luz'} number={person.number || '+5551992317903'} onEdit={() => {}} onDelete={() => {}}/>
                )}
            />
            ) : (
                <SimpleText>Parece que não tem nenhum número salvo ainda...</SimpleText>
            ) }
            <AddButton onClick={() => navigation.navigate('Add', { title: 'Adicionar número' })}/>
        </Container>
    );
}