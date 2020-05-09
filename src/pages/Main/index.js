import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Container, Title, Header, List as ListsList, SimpleText } from './styles';

import ListItem from '../../components/ListItem';
import AddButton from '../../components/AddButton';
import { getData, removeFromArray } from '../../util/LocalStorage';

export default function() {

    const [lists, setLists] = useState([]);

    useFocusEffect(() => {
        updateList().catch(console.log); 
    })

    async function updateList() {
        const data = await getData('lists');
        const lists = JSON.parse(data);
        setLists(lists);
    }

    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <Title>Listas Telefônicas</Title>
            </Header>
            { lists.length > 0 ?
                <ListsList
                    data={lists}
                    keyExtractor={list => list.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: list }) => (
                        <ListItem name={list.name || 'Lista sem nome'} id={list.id} numbers={list.numbers} onDelete={() => {
                            removeFromArray('lists', item => list.id !== item.id).then(updateList);
                        }}/>
                    )}
                /> :
                <SimpleText>Parece que não tem nenhuma lista salva ainda...</SimpleText>
            }
            <AddButton onClick={() => navigation.navigate('AddList')}/>
        </Container>
    );
}