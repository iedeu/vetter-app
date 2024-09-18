import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
  iconListContainer: {
    width: "100%",
    paddingHorizontal: "10%",
    paddingVertical: "15%",
    backgroundColor: COLORS.gray,
    alignItems: "flex-start",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  offsetIconContainer:{
    backgroundColor: COLORS.primary,
    padding: 18,
    marginTop: "-25%",
    alignSelf: "flex-end",
    borderRadius: 50,
  },
  offsetIcon: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
  iconListInnerContainer: {
    flexDirection: "column",
  },
  iconListTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    paddingBottom: "10%",
    paddingTop: "5%",
  },
  iconListText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.black,
    paddingLeft: "5%",
    paddingBottom: "2%",
  },
});

export default styles;
