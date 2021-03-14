import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export default StyleSheet.create({
    category: {
        display: "flex",
        height: 100,
        flex: 1,
        alignItems: "center",
        flexBasis: "auto",
        flexGrow: 1,
        flexShrink: 0,
        justifyContent: "center",
        borderRadius: 20,
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 4,
        backgroundColor: COLORS.lightGrayShade,
    },
    categoryTitle: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 12,
    },

    icon: {
        flex: 1,
        marginVertical: 5,
    },

    iconMain: {
        height: 65,
        width: 65,
        minWidth: 65,
        borderRadius: 65 * 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: COLORS.lightGrayShade,
    },
});
