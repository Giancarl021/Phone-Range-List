import styled from 'styled-components/native';
import { Container as GlobalContainer, Text as GlobalText } from '../../common/styles';
import { Shadow } from '../../common/colors';
import { FlatList } from 'react-native';

export const Container = styled(GlobalContainer)`
    justify-content: flex-start;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const Title = styled(GlobalText)`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const List = styled(FlatList)`
    margin-top: 30px;
    width: 100%;
`;

export const SimpleText = styled(GlobalText)`
    margin-top: 30px;
    color: ${Shadow.Text};
`;