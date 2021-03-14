import React, { useState } from "react";
import { Text, View } from "react-native";
import { HeaderButton } from "../components/buttons/HeaderButton";
import CategoryFlatList from "../components/flatlist/CategoryFlatList";
import Container from "../components/utils/Container";
import { CategoryType } from "../provider/ExpenseIncomeProvider";
import { ScreenProps } from "../screens/ScreenParamList";
import { utilStyle } from "../styles";

const CategoryModal: React.FC<ScreenProps<"Category">> = ({ navigation }) => {
    const [selected, setSelected] = useState<CategoryType | null>(null);

    // const data: Array<FlatListType> = [...formatFlatListData<CategoryType>(CATEGORY, numColumns), { action: true, key: 'action' }]
    return (
        <Container>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    ...utilStyle.mb1,
                }}>
                <Text style={{ ...utilStyle.h1 }}>Select Category</Text>
                <HeaderButton
                    disabled={!Boolean(selected)}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <CategoryFlatList selected={selected} setSelected={setSelected} />
        </Container>
    );
};

export default CategoryModal;
