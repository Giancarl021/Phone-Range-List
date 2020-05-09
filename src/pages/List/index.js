import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import PhoneItem from '../../components/PhoneItem';
import { Container, List as PhoneList, Header, Title } from './styles';


export default function(props) {
    const { name, numbers } = props.route.params;
    const navigation = useNavigation();
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(numbers || []);
    }, []);

    return (
        <Container>
            <Header>
                <Button icon="arrow-left" onClick={navigation.goBack}/>
                <Title>{name}</Title>
            </Header>
            <PhoneList
                data={list}
                keyExtractor={phone => phone.number}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: phone }) => (
                    <PhoneItem name={phone.name || 'Sem nome'} number={phone.number} onEdit={() => {}}/>
                )}
            />
        </Container>
    );
}