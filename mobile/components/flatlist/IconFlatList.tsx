import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ICONS } from "../../constants";
import formatFlatListData, {
    ActionEmptyType,
} from "../../utils/formatFlatListData";
import EmptyCard from "../cards/EmptyCard";
import IconCard, { IconType } from "../cards/IconCard";

interface IconFlatListProps {}

type FlatListType = ActionEmptyType | IconType;

const IconFlatList: React.FC<IconFlatListProps> = ({}) => {
    const [numColumns] = useState(5);
    const renderIcon = ({ item }: { item: FlatListType }) => {
        if (item as ActionEmptyType) {
            const actionEmpty = item as ActionEmptyType;
            if (actionEmpty.empty) return <EmptyCard key={actionEmpty.key} />;
        }
        if (item as IconType) {
            const iconItem = item as IconType;
            return <IconCard key={iconItem.id} icon={iconItem} />;
        }

        return null;
    };

    return (
        <FlatList
            data={formatFlatListData(ICONS, numColumns, false)}
            renderItem={renderIcon}
            numColumns={numColumns}
        />
    );
};
const style = StyleSheet.create({});
export default IconFlatList;
