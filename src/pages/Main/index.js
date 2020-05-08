import React, { useState } from 'react';

import { Container, Title, Header, List as PhoneList, SimpleText } from './styles';

import PhoneItem from '../../components/PhoneItem';
import AddButton from '../../components/AddButton';

export default function() {

    const [numbers, setNumbers] = useState([1,2,3]);

    return (
        <Container>
            <Header>
                <Title>Números Telefônicos</Title>
            </Header>
            { numbers.length > 0 ? (
                <PhoneList
                data={numbers}
                keyExtractor={item => String(item)}
                showsVerticalScrollIndicator={false}
                renderItem={phone => (
                    <PhoneItem name={'Jerusa Luz'} number={'+5551999503886'} onEdit={() => {}} onDelete={() => {}}/>
                )}
            />
            ) : (
                <SimpleText>Parece que não tem nenhum número salvo ainda...</SimpleText>
            ) }
            <AddButton onClick={() => {setNumbers([...numbers, numbers[numbers.length - 1] + 1])}}/>
        </Container>
    )
}