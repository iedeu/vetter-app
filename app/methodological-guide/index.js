import { View, ScrollView, SafeAreaView, Text, Pressable } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import { images, icons, SIZES, COLORS, FONT } from '../../constants';
import { PartnerCarousel, FollowUs, EuFundedFooter, SimpleLinkButton } from "../../components";

const MethodGuide = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
                <View style={{ flex: 1, paddingTop: "10%", justifyContent:"flex-top",  paddingHorizontal: 25 }}>
                    <Text>
                        {t('methodological_guide.description_p1')}
                        {'\n'}
                        {'\n'}
                        {t('methodological_guide.description_p2')}
                        {'\n'}
                        {'\n'}
                        {t('methodological_guide.description_p3')}
                    </Text>
                    <View style={{flex: 1, paddingTop: "10%"}}>
                        <SimpleLinkButton title={t('methodological_guide.coming_soon')} link={"https://projectvetter.eu/wp-content/uploads/2024/01/PR3-1.pdf"} />
                    </View>
                </View>
                <PartnerCarousel />
                <FollowUs />
                <EuFundedFooter />
            </ScrollView>

        </SafeAreaView>
    )
}

export default MethodGuide;