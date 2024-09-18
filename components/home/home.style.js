import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  subLogoTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.black,
    textAlign: "center"
  },
  logoTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: SIZES.small,
    marginBottom: SIZES.large,
  },
  buttonTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.black,
    marginTop: SIZES.small,
    marginBottom: SIZES.large,
    textAlign: "center"
  },
  buttonTitlePressed: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.white,
    marginTop: SIZES.small,
    marginBottom: SIZES.large,
    textAlign: "center"
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  gridContainer: {
    alignItems: "center",
    marginHorizontal: "auto",
    marginVertical: 50,
  },
  row: {
    flexDirection: "row",
  },
  link: {
    color: COLORS.secondary,
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  boxButton: {
    width: 150,
    height: 150,
    alignItems: "center",
    backgroundColor: COLORS.white,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4.5,
    // Android shadow
    elevation: 5,
  },
  boxButtonPressed: {
    width: 150,
    height: 150,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },

  languageSelectContainer:{
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
});

export default styles;
