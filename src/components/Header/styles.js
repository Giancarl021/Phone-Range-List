import styled from 'styled-components/native';
import { Text as GlobalText } from '../../common/styles';
import Button from '../../components/Button';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
    margin-bottom: 30px;
`;

export const ReturnButton = styled(Button)`

`;

export const Title = styled(GlobalText)`
    margin-left: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;