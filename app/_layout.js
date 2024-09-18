import { Slot, Stack, useRouter, Layout } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from "react-i18next";

import { images, icons, SIZES, COLORS } from '../constants';
import { FeatherBackBtn } from "../components";
import { translations } from '../localization';

SplashScreen.preventAutoHideAsync();

//initialize i18n instance to use it on all components & screens.
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translations.en,
        },
        de: {
            translation: translations.de,
        },
        it: {
            translation: translations.it,
        },
        el: {
            translation: translations.el,
        },
        tr: {
            translation: translations.tr,
        }
    },
    compatibilityJSON: 'v3',
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    returnNull: false,
});


const parentLayout = () =>{
    const { t, i18n } = useTranslation();

    const [fontsLoaded] = useFonts({
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return(
        <Stack onLayout={onLayoutRootView} screenOptions={{ 
            headerLeft: () => (
                <FeatherBackBtn
                    iconClass="ArrowLeft"
                    bgColor= {COLORS.primary}
                    color= {COLORS.white}
                />
            ),
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
            headerStyle: { 
                backgroundColor: COLORS.primary,
            },
            headerShadowVisible: false, 
        }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="about/index" options={{ 
                headerTitle: t('about.header')
            }} />
            <Stack.Screen name="methodological-guide/index" options={{ 
                headerTitle: t('methodological_guide.header')
            }} />
            <Stack.Screen name="e-learning/index" options={{ 
                headerTitle: t('e_learning.header')
            }} />
            <Stack.Screen name="network-badge/index" options={{ 
                headerTitle: t('network.header')
            }} />
        </Stack>
    );
}

export default parentLayout;