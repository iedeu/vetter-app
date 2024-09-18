import React from 'react'
import { Dimensions, Image, View, Text, } from 'react-native'
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import styles from './footer.style';
import { images, COLORS } from '../../../constants';

const EuFundedFooter = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation();

    return (
        <View style={styles.euFundedContainer}>
            <Image 
                source={images.euFunded}
                style={styles.euFundedImg}
            />
            <Text style={styles.euFundedText}>
                {t('footer.disclaimer')}
            </Text>
        </View>
    )
}

export default EuFundedFooter