import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { CategoryType } from "../../provider/ExpenseIncomeProvider";
import { Ionicons } from "@expo/vector-icons";
import { cardStyle } from "../../styles";

interface CategoryCardProps {
    category: CategoryType;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<CategoryType | null>>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    category,
    selected,
    setSelected,
}) => {
    const backgroundColor = selected
        ? COLORS.primaryShade
        : COLORS.lightGrayShade;
    const color = selected ? COLORS.primary : COLORS.white;

    return (
        <TouchableOpacity
            style={{
                ...cardStyle.category,
                backgroundColor,
            }}
            onPress={() => setSelected(category)}>
            <Ionicons name={category.icon} size={30} color={color} />
            <Text style={{ ...cardStyle.categoryTitle, color }}>
                {category.name}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;
