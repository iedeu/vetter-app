import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
  linkButtonTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
    textAlign: "center",
  },
  linkButton: {
    alignSelf: 'flex-start',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 50,
  },
  linkButtonPressed: {
    alignSelf: 'flex-start',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.black,
    padding: 20,
    borderRadius: 50,
  },

  //simple styled button
  simpleStyledBtnTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
    textAlign: "center",
  },
  simpleStyledBtn: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  simpleStyledBtnPressed: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.black,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  simpleStyledBtnDisabled: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D8D8D8",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 0,
  },

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
    paddingRight: "5%"
  },
  iconListTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    paddingBottom: "10%",
  },
  iconListText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.black,
    paddingLeft: "5%",
    paddingBottom: "2%",
  },

  customInputContainer:{
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    marginBottom: "7%",
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D8D8D8",
  },

  errorText: {
    color: 'red',
    alignSelf: "flex-start",
    paddingLeft: '7%',
    marginBottom: "7%",
  }
});

export default styles;
