import styled from 'styled-components/native';
import { Container as GlobalContainer, Text as GlobalText } from '../../common/styles';
import { Shadow, Light, Main } from '../../common/colors';
import ComponentButton from '../../components/Button';

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin-bottom: 30px;
`;

export const Button = styled(ComponentButton)`
`;

export const Title = styled(GlobalText)`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

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