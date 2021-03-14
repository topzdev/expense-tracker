import React from "react";
import { View, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import {
    Ionicons,
    Entypo,
    AntDesign,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { cardStyle } from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export type IconType = {
    id: number;
    icon: any;
    type: IconGroupType;
    name: string;
};

export type IconGroupType =
    | "Entypo"
    | "AntDesign"
    | "EvilIcons"
    | "Feather"
    | "Ionicons"
    | "FontAwesome5"
    | "FontAwesome"
    | "MaterialCommunityIcons";

interface IconCardProps extends TouchableOpacityProps {
    icon: IconType;
}

const iconType = {
    Entypo: Entypo,
    AntDesign: AntDesign,
    EvilIcons: EvilIcons,
    Feather: Feather,
    Ionicons: Ionicons,
    FontAwesome5: FontAwesome5,
    FontAwesome: FontAwesome,
    MaterialCommunityIcons: MaterialCommunityIcons,
};

const IconCard: React.FC<IconCardProps> = (props) => {
    const { icon } = props;
    const Icon = iconType[icon.type];
    return (
        <View style={cardStyle.icon}>
            <TouchableOpacity style={{ ...cardStyle.iconMain }}>
                <Icon name={icon.icon} size={25} />
            </TouchableOpacity>
        </View>
    );
};
export default IconCard;
