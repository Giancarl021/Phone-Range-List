import React from 'react';
import { Linking } from 'react-native'
import { parsePhoneNumberFromString } from 'libphonenumber-js/min';
import Button from '../../components/Button';
import { Container, Title, Subtitle, ButtonContainer } from './styles';

export default function(props) {
    const { name, number, onDelete, onEdit } = props;
    const message = '';
    const buttonSize = 25;

    return (
        <Container>
            <Title>{name}</Title>
            <Subtitle>{formatNumber(number)}</Subtitle>
            <ButtonContainer>
                <Button onClick={() => {Linking.openURL(`tel:${number}`)}} icon="phone-call" size={buttonSize}/>
                <Button onClick={() => {Linking.openURL(`whatsapp://send?text=${message}&phone=${number}`)}} icon="whatsapp" size={buttonSize}/>
                <Button onClick={() => {}} icon="list" size={buttonSize}/>
                <Button onClick={onEdit} icon="edit-2" size={buttonSize}/>
                <Button onClick={onDelete} icon="trash-2" size={buttonSize}/>
            </ButtonContainer>
        </Container>
    );

    function formatNumber(phoneNumber) {
        const number = parsePhoneNumberFromString(phoneNumber);
        if(!number) return 'Número inválido';
        return number.formatNational();
    }
}