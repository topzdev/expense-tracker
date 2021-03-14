import React from "react";
import { Text, FlatList } from "react-native";
import EmptyCard from "../components/cards/EmptyCard";
import IconCard, { IconType } from "../components/cards/IconCard";
import IconFlatList from "../components/flatlist/IconFlatList";
import FormGroup from "../components/Form/FormGroup";
import InputPrimary from "../components/inputs/InputPrimary";
import Container from "../components/utils/Container";
import { cardStyle, utilStyle } from "../styles";
import formatFlatListData, {
    ActionEmptyType,
} from "../utils/formatFlatListData";

interface AddCategorModalProps {}

const AddCategorModal: React.FC<AddCategorModalProps> = ({}) => {
    return (
        <Container>
            <Text style={{ ...utilStyle.h1 }}>Add Category</Text>

            <FormGroup>
                <InputPrimary icon={<Text>$</Text>} placeholder='Amount' />
            </FormGroup>

            <FormGroup>
                <IconFlatList />
            </FormGroup>
        </Container>
    );
};

export default AddCategorModal;
