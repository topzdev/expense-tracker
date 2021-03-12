import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants';
import card from '../styles/card';
import { useNavigation } from '@react-navigation/native'
import { ScreenParamList } from '../screens/ScreenParamList';
interface AddCategoryButtonProps {

}

export const AddCategoryButton: React.FC<AddCategoryButtonProps> = ({ }) => {
    const navigation = useNavigation();
    return (<TouchableOpacity onPress={() => navigation.navigate('AddCategory')} style={{ ...card.category, borderColor: COLORS.primary, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed' }}>
        <Ionicons name={'add'} size={35} color={COLORS.primary} />
        <Text style={{ ...card.categoryTitle, color: COLORS.primary }}>Add Category</Text>
    </TouchableOpacity>);
}