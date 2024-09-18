import { View, ScrollView, SafeAreaView, Text, Pressable } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import { images, icons, SIZES, COLORS, FONT } from '../../constants';
import { PartnerCarousel, FollowUs, EuFundedFooter, SimpleLinkButton, IconListSection } from "../../components";

const ELearning = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation();

    const beneficiariesItems = [
        {id: "b_1", text: t('e_learning.beneficiary_1')},
        {id: "b_2", text: t('e_learning.beneficiary_2')},
        {id: "b_3", text: t('e_learning.beneficiary_3')},
        {id: "b_4", text: t('e_learning.beneficiary_4')},
        {id: "b_5", text: t('e_learning.beneficiary_5')},
        {id: "b_6", text: t('e_learning.beneficiary_6')},
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
                <View style={{ flex: 1, paddingTop: "10%", justifyContent:"flex-top",  paddingHorizontal: 25 }}>
                    <Text style={{fontFamily: FONT.regular}}>
                        {t('e_learning.description')}
                        {'\n'}
                        {'\n'}
                    </Text>
                </View>
                <IconListSection title={t('e_learning.beneficiaries_title')} itemList={beneficiariesItems} />
                <View style={{ flex: 1, paddingTop: "10%", justifyContent:"flex-top",  paddingHorizontal: 25 }}>
                    <Text style={{
                        color: COLORS.primary,
                        paddingTop: "15%",
                        paddingBottom: "10%",
                        fontSize: SIZES.medium,
                        fontFamily: FONT.bold,
                    }}>
                        {t('e_learning.outcome_title')}
                    </Text>
                    <Text style={{fontFamily: FONT.regular}}>
                        {t('e_learning.outcome_description')}
                        {'\n'}
                        {'\n'}
                    </Text>
                </View>
                <View style={{flex: 1, paddingTop: "10%", paddingHorizontal: 25}}>
                    <SimpleLinkButton title={t('e_learning.get_course_now')} link={"https://e-learning.cosvitec.com/"} />
                </View>
                <PartnerCarousel />
                <FollowUs />
                <EuFundedFooter />
            </ScrollView>

        </SafeAreaView>
    )
}

export default ELearning;