import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { Main, Light } from './colors';

export const Container = styled.View`
    padding-top: ${Constants.statusBarHeight + 20}px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: 100%;
    background-color: ${Main.Background};
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${Main.Text};
    text-align: center;
`;

export const FixedButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${Light.Background};
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;