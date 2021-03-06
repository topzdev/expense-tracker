import React, { useContext, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AuthContext } from '../provider/AuthProvider';
import { buttonStyle, formStyle, inputStyle, utilStyle } from '../styles';
import { ScreenProps } from './ScreenParamList';

export interface LoginCredentials {
    username: string;
    password: string;
}

export default function loginscreen({ navigation, route }: ScreenProps<'Login'>) {
    const [credentials, setCredential] = useState<LoginCredentials>({
        username: 'topzdev',
        password: 'dev123'
    })
    const { onLogin } = useContext(AuthContext)


    const onChange = (prop: keyof LoginCredentials, value: string) => {
        setCredential(prevValue => ({ ...prevValue, [prop]: value }))
    }


    return (
        <View style={{ ...utilStyle.container, ...utilStyle.center }}>
            <Text style={{ ...utilStyle.h1, ...utilStyle.mb1 }}>Sign In</Text>

            <View style={formStyle.formGroup}>
                <TextInput style={inputStyle.primaryInput} value={credentials.username} placeholder="Enter your username here" onChangeText={text => onChange('username', text)} />
            </View>
            <View style={formStyle.formGroup}>
                <TextInput secureTextEntry={true} textContentType="password" autoCompleteType="password" style={inputStyle.primaryInput} value={credentials.password} placeholder="Enter your password here" onChangeText={text => onChange('password', text)} />
            </View>
            <View style={formStyle.formGroup}>
                <TouchableHighlight style={buttonStyle.primaryButton} onPress={() => onLogin(credentials)}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
            <View style={formStyle.formGroup}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                    <Text style={utilStyle.link}>No account yet? Click to here to sign up.</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

