import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native';
import { inputStyle } from '../styles';
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants';

interface InputPrimaryProps extends TextInputProps {
    icon?: string
}

const InputPrimary: React.FC<InputPrimaryProps> = (props) => {
    const { icon } = props;
    return (
        <View style={inputStyle.primary}>
            {icon && <Ionicons name={icon} size={30} color={COLORS.primary} />}
            <TextInput {...props} style={inputStyle.primaryField} />
        </View>

    );
}

export default InputPrimary