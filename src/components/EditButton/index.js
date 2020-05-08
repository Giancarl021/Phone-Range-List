import React from 'react';
import { FixedButton } from '../../common/styles';
import { Feather } from '@expo/vector-icons';
import { Light } from '../../common/colors';

export default function() {
    return (
        <FixedButton onPress={props.onClick || (() => {})}>
            <Feather name="edit-2" size={30} color={Light.Text}/>
        </FixedButton>
    );
}