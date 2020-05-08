import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Main } from '../../common/colors';

export default function(props) {
    const { icon, size, color, onClick } = props;

    const Icon = icon === 'whatsapp' ? (
        <FontAwesome name={icon} size={size || 32} color={color || Main.Text}/>
    ) : (
        <Feather name={icon || 'hash'} size={size || 32} color={color || Main.Text}/>
    );

    return (
        <TouchableOpacity onPress={onClick}>{Icon}</TouchableOpacity>
    );
}