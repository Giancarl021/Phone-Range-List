import styled from 'styled-components/native';
import { Shadow, PhoneStatusColors } from '../../common/colors';
import { Text as GlobalText } from '../../common/styles';

const borderRadius = '10px';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #0002;
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
`;

export const Divisor = styled.View`
    width: 2px;
    height: 100%;
    background-color: ${Shadow.Text};
    opacity: .6;
`;

export const Text = styled(GlobalText)`
    font-size: 18px;
`;

export const Status = styled.Text`
    color: ${props => PhoneStatusColors[props.statusCode] || Shadow.Text};
    font-size: 18px;
`;