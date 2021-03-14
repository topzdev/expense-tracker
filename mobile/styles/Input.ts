import { StyleSheet } from "react-native";
import { COLORS } from "../constants";
import { SIZES } from "../constants/theme";

export default StyleSheet.create({
    primary: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        height: 55,
        backgroundColor: COLORS.gray,
    },

    primaryIconContainer: {
        justifyContent: "center",
    },
    primaryIcon: {
        marginRight: 10,
        alignSelf: "center",
        fontSize: 22,
    },

    primaryField: {
        fontSize: 16,
        flexGrow: 1,
    },
});
