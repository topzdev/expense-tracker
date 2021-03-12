import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export default StyleSheet.create({
  primary: {
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: COLORS.primary,
  },

  primaryField: {
    color: COLORS.white,
  },
});
