import styled from 'styled-components/native';
import { Text as GlobalText } from '../../common/styles';
import ComponentButton from '../../components/Button';

export const Container = styled.View`
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