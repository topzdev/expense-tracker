import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacityProps,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonStyle } from "../../styles";

interface PrimaryButtonProps extends TouchableOpacityProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
    return (
        <TouchableOpacity style={buttonStyle.primary} {...props}>
            <Text style={buttonStyle.primaryText}>{props.children}</Text>
        </TouchableOpacity>
    );
};
export default PrimaryButton;
