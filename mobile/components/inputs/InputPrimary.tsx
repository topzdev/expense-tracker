import React, { ReactNode } from 'react'
import { TextInput, TextInputProps, View } from 'react-native';
import { inputStyle } from '../../styles';
import { } from '@expo/vector-icons'
import { COLORS } from '../../constants';
import { SIZES } from '../../constants/theme';

interface InputPrimaryProps extends TextInputProps {
    icon?: any
}

const InputPrimary: React.FC<InputPrimaryProps> = (props) => {
    const { icon } = props;

    const Icon = () => {
        return React.cloneElement(icon, { style: inputStyle.primaryIcon, size: SIZES.icon_sm })
    }
    return (
        <View style={inputStyle.primary}>
            {icon && <Icon />}
            <TextInput {...props} style={inputStyle.primaryField} />
        </View>

    );
}

export default InputPrimary