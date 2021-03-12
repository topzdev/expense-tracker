import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export default StyleSheet.create({
  category: {
    height: 100,
    width: "23%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
    marginRight: "2%",
    marginBottom: 10,
    backgroundColor: COLORS.lightGrayShade,
  },
  categoryTitle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 12,
  },
});
