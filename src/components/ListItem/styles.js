import styled from 'styled-components/native';
import { Shadow } from '../../common/colors';
import { Text as GlobalText } from '../../common/styles';

const borderRadius = '10px';

export const Container = styled.View`
    justify-content: flex-start;
    border-radius: ${borderRadius};
    background-color: ${Shadow.Background};
    width: 100%;
    margin-bottom: 5px;
`;

export const Title = styled(GlobalText)`
    padding: 15px;
    font-size: 24px;
    width: 100%;
    text-align: left;
`;

export const Subtitle = styled(GlobalText)`
    font-size: 18px;
    padding: 3px 15px;
    width: 100%;
    color: ${Shadow.Text};
    margin-left: 10px;
    text-align: left;
`;

export const ButtonContainer = styled.View`
    padding: 10px;
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    margin-top: 10px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    background-color: #0003;
`;

export const DataContainer = styled.TouchableOpacity``;