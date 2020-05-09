import React from 'react';
import { Linking } from 'react-native';
import Button from '../../components/Button';
import { Container, Title, Subtitle, ButtonContainer } from './styles';
import { formatNumber } from '../../util/format';

export default function(props) {
    const { name, number, onDelete, onEdit } = props;
    const message = '';
    const buttonSize = 25;

    return (
        <Container>
            <Title>{name || 'Sem nome'}</Title>
            <Subtitle>{formatNumber(number) || 'Número inválido'}</Subtitle>
            <ButtonContainer>
                <Button onClick={() => {Linking.openURL(`tel:${number}`)}} icon="phone-call" size={buttonSize}/>
                <Button onClick={() => {Linking.openURL(`whatsapp://send?text=${message}&phone=${number}`)}} icon="whatsapp" size={buttonSize}/>
                <Button onClick={() => {}} icon="list" size={buttonSize}/>
                <Button onClick={onEdit} icon="edit-2" size={buttonSize}/>
                <Button onClick={onDelete} icon="trash-2" size={buttonSize}/>
            </ButtonContainer>
        </Container>
    );
}