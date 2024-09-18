import { View, Text, Image, } from 'react-native'
import { useRouter } from 'expo-router'
import { useTranslation } from "react-i18next";

import styles from './home.style';
import { images } from '../../constants';

const LogoSection = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.logoContainer}>
        <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logoImage}
        />
        <Text style={styles.logoTitle}>{t('home.title')}</Text>
        <Text style={styles.subLogoTitle}>{t('home.description')}</Text>
    </View>
  )
}

export default LogoSection;