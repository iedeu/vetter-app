import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
    containerFollow: {
        width: "100%",
        paddingHorizontal: "10%",
        paddingVertical: "15%",
        backgroundColor: COLORS.primary,
        alignItems: "center",
    },
    carouselContainer: {
        paddingTop: 20, 
        paddingBottom: 50,
    },
    partnersTitle: {
        color: COLORS.primary,
        textAlign: "center",
        paddingTop: "15%",
        paddingBottom: "10%",
        fontSize: SIZES.large,
        fontFamily: FONT.bold,
    },
    followBtnsContainer: {
        alignItems: "center",
        marginHorizontal: "auto",
    },  
    followTitle: {
        color: COLORS.white,
        textAlign: "center",
        paddingBottom: "10%",
        fontSize: SIZES.large,
        fontFamily: FONT.bold,
    },
    followText: {
        color: COLORS.white,
        textAlign: "center",
        paddingBottom: "10%",
    },
    followButton: {
        backgroundColor: COLORS.white,
        borderRadius: 50,
        padding: 10,
        marginHorizontal: "2%",
        textAlign: "center",
    },
    followButtonPressed: {
        backgroundColor: COLORS.black,
        borderRadius: 50,
        padding: 10,
        marginHorizontal: "2%",
        textAlign: "center",
    },
    euFundedContainer: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: "15%",
        backgroundColor: COLORS.black,
    },
    euFundedText: {
        color: COLORS.white,
        textAlign: "left",
        paddingBottom: "10%",
    }, 
    euFundedImg: {
        width: 250,
        height: 50,
        resizeMode: "cover",
        marginBottom: "5%",
    },

});

export default styles;
