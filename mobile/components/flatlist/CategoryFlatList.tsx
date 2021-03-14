import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORY } from "../../constants";
import { CategoryType } from "../../provider/ExpenseIncomeProvider";
import formatFlatListData, {
    ActionEmptyType,
} from "../../utils/formatFlatListData";
import { AddCategoryButton } from "../buttons/AddCategoryButton";
import CategoryCard from "../cards/CategoryCard";
import EmptyCard from "../cards/EmptyCard";

interface CategoryFlatListProps {
    selected: any;
    setSelected: any;
}

type FlatListType = ActionEmptyType | CategoryType;

const CategoryFlatList: React.FC<CategoryFlatListProps> = ({
    selected,
    setSelected,
}) => {
    const [numColumns, setNumColumns] = useState<number>(4);

    const formatData = useCallback(formatFlatListData, []);

    const renderCategories = ({ item }: { item: FlatListType }) => {
        if (item as ActionEmptyType) {
            const actionEmpty = item as ActionEmptyType;
            if (actionEmpty.empty) {
                return (
                    <EmptyCard
                        style={{ padding: 10, backgroundColor: "transparent" }}
                        key={actionEmpty.key}
                    />
                );
            }

            if (actionEmpty.action) {
                return <AddCategoryButton key={actionEmpty.key} />;
            }
        }

        if (item as CategoryType) {
            const categoryItem = item as CategoryType;
            return (
                <CategoryCard
                    category={categoryItem}
                    selected={categoryItem.id === selected?.id}
                    setSelected={setSelected}
                />
            );
        }

        return null;
    };
    return (
        <FlatList
            data={formatData(CATEGORY, numColumns, true)}
            renderItem={renderCategories}
            numColumns={numColumns}
        />
    );
};
const style = StyleSheet.create({});
export default CategoryFlatList;
