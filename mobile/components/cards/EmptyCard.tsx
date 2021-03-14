import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import { cardStyle } from "../../styles";
import { ActionEmptyType } from "../../utils/formatFlatListData";

interface EmptyCardProps {
    style?: any;
}

const EmptyCard: React.FC<EmptyCardProps> = ({ style }) => {
    console.log(style);
    return (
        <View
            style={{
                flex: 1,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "auto",
                ...style,
            }}></View>
    );
};

const style = StyleSheet.create({});

export default EmptyCard;
