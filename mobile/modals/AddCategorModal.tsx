import React from 'react'
import Container from '../components/Container';
import { Text } from 'react-native'
import { utilStyle } from '../styles';

interface AddCategorModalProps {

}

const AddCategorModal: React.FC<AddCategorModalProps> = ({ }) => {
    return (<Container>
        <Text style={{ ...utilStyle.h1 }}>
            Add Category
        </Text>




    </Container>);
}


export default AddCategorModal;