import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import { formStyle } from "../../styles";

interface FormGroupProps extends ViewProps {}

const FormGroup: React.FC<FormGroupProps> = (props) => {
    return <View style={formStyle.formGroup}>{props.children}</View>;
};
const style = StyleSheet.create({});
export default FormGroup;
