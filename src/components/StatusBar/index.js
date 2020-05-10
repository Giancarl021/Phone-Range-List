import React from 'react';
import { StatusBar } from 'react-native';
import { StatusBarColor as Color } from '../../common/colors';

export default function(props) {
    const { backgroundColor } = props;
    return (
        <StatusBar backgroundColor={backgroundColor || Color.Background} barStyle={Color.Text}/>
    );
}