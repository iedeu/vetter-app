import { View, ScrollView, SafeAreaView, Text, Pressable } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import { images, icons, SIZES, COLORS, FONT } from '../../constants';
import { PartnerCarousel, FollowUs, EuFundedFooter } from "../../components";

const About = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
                <View style={{ flex: 1, padding: 0, justifyContent:"flex-top",  paddingHorizontal: 25 }}>
                    <Text style={{
                        color: COLORS.primary,
                        paddingTop: "15%",
                        paddingBottom: "10%",
                        fontSize: SIZES.medium,
                        fontFamily: FONT.bold,
                    }}>
                        {t('about.title')}
                    </Text>
                    <Text>
                        {t('about.description_p1')}
                        {'\n'}
                        {'\n'}
                        {t('about.description_p2')}
                        {'\n'}
                        {'\n'}
                        {t('about.description_p3')}
                    </Text>
                    <PartnerCarousel />
                </View>
                <FollowUs />
                <EuFundedFooter />
            </ScrollView>

        </SafeAreaView>
    )
}

export default About;