import React from "react";
import { View, Text, StyleSheet, TextProps } from "react-native";
import { utilStyle } from "../../styles";

interface HeadingProps extends TextProps {}

const Heading: React.FC<HeadingProps> = (props) => {
    const { style, children } = props;
    return (
        <Text {...props} style={{ ...utilStyle.h1 }}>
            {children}
        </Text>
    );
};
const style = StyleSheet.create({});
export default Heading;
