import styled from 'styled-components/native';
import { Container as GlobalContainer, Text as GlobalText } from '../../common/styles';
import { Shadow } from '../../common/colors';
import { FlatList } from 'react-native';

export const Container = styled(GlobalContainer)``;

export const List = styled(FlatList)`
    margin-top: 30px;
    width: 100%;
`;