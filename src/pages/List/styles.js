import styled from 'styled-components/native';
import { Container as GlobalContainer, Text as GlobalText } from '../../common/styles';
import { Shadow } from '../../common/colors';

export const Container = styled(GlobalContainer)``;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
`;

export const Title = styled(GlobalText)`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-left: 20px;
`;

export const List = styled.FlatList`
    margin-top: 30px;
    width: 100%;
`;

export const SimpleText = styled(GlobalText)`
    margin-top: 30px;
    color: ${Shadow.Text};
`;