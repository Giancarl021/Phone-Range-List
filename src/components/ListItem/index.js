import React from 'react';
import Button from '../../components/Button';
import { Container, Title, Subtitle, ButtonContainer, DataContainer } from './styles';
import { formatNumber } from '../../util/format';

export default function(props) {
    const { name, numbers, onDelete } = props;
    const buttonSize = 25;
    return (
        <Container>
            <DataContainer onPress={() => {}}>
                <Title>{name}</Title>
                <Subtitle>Origem: {formatNumber(numbers[0].number)}</Subtitle>
            </DataContainer>
            <ButtonContainer>
                <Button onClick={onDelete} icon="trash-2" size={buttonSize}/>
            </ButtonContainer>
        </Container>
    );
}