import React from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { StatusName } from '../../util/status';
import { Container, Title, Subtitle, Status, ButtonContainer } from './styles';
import { formatNumber } from '../../util/format';

export default function(props) {
    const { name, number, onEdit, status } = props;
    const message = '';
    const buttonSize = 25;

    const navigation = useNavigation();

    function goToHistory() {
        navigation.navigate('History', { number });
    }

    return (
        <Container>
            <Title>{name || 'Sem nome'}</Title>
            <Subtitle>{formatNumber(number) || 'Número inválido'}</Subtitle>
            <Subtitle>Último status: <Status statusCode={status || 0}>{StatusName[status || 0]}</Status></Subtitle>
            <ButtonContainer>
                <Button onClick={() => {Linking.openURL(`tel:${number}`)} } icon="phone-call" size={buttonSize}/>
                <Button onClick={() => {Linking.openURL(`sms:${number}`)}} icon="mail" size={buttonSize}/>
                <Button onClick={() => {Linking.openURL(`whatsapp://send?text=${message}&phone=${number}`)}} icon="whatsapp" size={buttonSize}/>
                <Button onClick={goToHistory} icon="list" size={buttonSize}/>
                <Button onClick={onEdit} icon="edit-2" size={buttonSize}/>
            </ButtonContainer>
        </Container>
    );
}