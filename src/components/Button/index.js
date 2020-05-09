import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Main } from '../../common/colors';

export default function(props) {
    const { icon, size, color, onClick, ...rest } = props;

    const Icon = icon === 'whatsapp' ? (
        <FontAwesome style={{opacity: rest.disabled ? 0.6 : 1}} name={icon} size={size || 32} color={color || Main.Text}/>
    ) : (
        <Feather style={{opacity: rest.disabled ? 0.6 : 1}} name={icon || 'hash'} size={size || 32} color={color || Main.Text}/>
    );

    return (
        <TouchableOpacity onPress={onClick} {...rest}>{Icon}</TouchableOpacity>
    );
}