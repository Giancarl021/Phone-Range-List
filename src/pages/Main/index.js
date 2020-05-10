import React, { useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Container, Title, Header, List as ListsList, SimpleText } from './styles';
import ListItem from '../../components/ListItem';
import AddButton from '../../components/AddButton';
import { getData, removeFromPhoneList } from '../../services/LocalStorage';
import StatusBar from '../../components/StatusBar';
import { Main } from '../../common/colors';

export default function() {

    const [lists, setLists] = useState([]);

    useFocusEffect(() => {
        updateList().catch(console.log); 
    }, [])

    async function updateList() {
        const lists = await getData('lists', []);
        setLists(lists);
    }

    const navigation = useNavigation();
    return (
        <Container>
            <StatusBar backgroundColor={Main.Background}/>
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
                            removeFromPhoneList(list.id).then(updateList);
                        }}/>
                    )}
                /> :
                <SimpleText>Parece que não tem nenhuma lista salva ainda...</SimpleText>
            }
            <AddButton onClick={() => navigation.navigate('AddList')}/>
        </Container>
    );
}