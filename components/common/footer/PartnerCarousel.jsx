import React from 'react'
import { Dimensions, TouchableOpacity, Image, View, Text, Linking } from 'react-native'
import { useRouter } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';
import { useTranslation } from 'react-i18next';

import styles from './footer.style';
import { images } from '../../../constants';

const PartnerCarousel = () => {
    const router = useRouter();
    const width = Dimensions.get('window').width;
    const { t, i18n } = useTranslation();

    const imgConstants = ["csiLogo","bosevLogo","elfTechLogo","cosvitecLogo","iedLogo"];
    const gotoUrls = ["https://csicy.com/","http://bosev.org/","https://eifi-tech.eu/","https://www.cosvitec.eu/","https://ied.eu/"];

  return (
    <View style={styles.carouselContainer}>
        <Text style={styles.partnersTitle}>
            {t('footer.partnership')}
        </Text>
        <Carousel
            loop
            width={180}
            height={width / 3}
            autoPlay={true}
            style={{
                width: width,
                height: width / 3,
                justifyContent: "center",
                backgroundColor: "#fff",
            }}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 10,
            }}
            panGestureHandlerProps={{
                activeOffsetXEnd: 10,
                activeOffsetXStart: -10,
            }}
            data={[...new Array(5).keys()]}
            scrollAnimationDuration={2000}
            renderItem={({ index }) => (
                <View
                    style={{
                        flex: 1,
                        borderWidth: 0,
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity onPress={() => { return Linking.openURL(gotoUrls[index]) }}>
                        <Image source={images[imgConstants[index]]}/>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
    
  )
}

export default PartnerCarousel