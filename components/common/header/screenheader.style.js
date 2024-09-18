import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: (bgColor) => ({
    width: 40,
    height: 40,
    backgroundColor: bgColor,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  featherIcon: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
