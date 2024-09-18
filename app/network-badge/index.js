import { View, ScrollView, SafeAreaView, Text, Pressable } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import { images, icons, SIZES, COLORS, FONT } from '../../constants';
import { PartnerCarousel, FollowUs, EuFundedFooter, SimpleLinkButton, JoinForm } from "../../components";

const NetworkBadge = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
                <View style={{ flex: 1, paddingTop: "10%", justifyContent:"flex-top",  paddingHorizontal: 25 }}>
                    <Text style={{fontFamily: FONT.regular}}>
                        {t('network.description_p1')}
                        {'\n'}
                        {'\n'}
                        {t('network.description_p2')}
                        {'\n'}
                        {'\n'}
                        {t('network.description_p3')}
                        {'\n'}
                        {'\n'}
                    </Text>
                </View>
                <JoinForm title={t('network.join_form_title')} />
                
                <PartnerCarousel />
                <FollowUs />
                <EuFundedFooter />
            </ScrollView>

        </SafeAreaView>
    )
}

export default NetworkBadge;