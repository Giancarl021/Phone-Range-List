import styled from 'styled-components/native';
import { Container as GlobalContainer, Text as GlobalText } from '../../common/styles';
import { Light, Shadow } from '../../common/colors';

export const Container = styled(GlobalContainer)`
    background-color: ${Light.Background};
    padding: 0;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`;

export const Title = styled(GlobalText)`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-left: 20px;
`;