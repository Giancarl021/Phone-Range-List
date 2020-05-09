import styled from 'styled-components/native';
import { Container as GlobalContainer, Text as GlobalText } from '../../common/styles';
import { Shadow, Light, Main } from '../../common/colors';

export const Container = styled(GlobalContainer)`
    background-color: ${Light.Background};
`;

export const Text = styled(GlobalText)``;

export const Form = styled.View`
    width: 100%;
`;

export const Input = styled.TextInput`
    width: 100%;
    background-color: ${Shadow.Background};
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: ${Shadow.Text};
    font-size: 28px;
    margin-bottom: 20px;
`;

export const Label = styled.Text`
    width: 100%;
    padding: 5px 10px;
    background-color: ${Main.Background};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: ${Main.Text};
    font-size: 20px;
`;