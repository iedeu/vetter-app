import React, { useState, useEffect } from 'react'
import { Dimensions, TouchableOpacity, Image, View, Text, Linking, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import styles from './footer.style';
import { images, COLORS } from '../../../constants';
import  SvgImage  from '../SvgImage';

const FollowUs = () => {
    const router = useRouter();
    const [pressedButton, setPressedButton] = useState("");
    const { t, i18n } = useTranslation();

    const width = Dimensions.get('window').width;
    const buttonData = [
        {id: "f_1", img: "WebsiteSvg", url: "https://projectvetter.eu/"},
        {id: "f_2", img: "FacebookSvg", url: "https://www.facebook.com/VetterEUproject"},
        {id: "f_3", img: "LinkedinSvg", url: "https://www.linkedin.com/company/vetter-eu-project/"},
        {id: "f_4", img: "InstagramSvg", url: "https://www.instagram.com/vettereuproject/"},
    ];

    const handleBtnPress = (item) =>{
        setPressedButton(item.id);
    } 

    const handleBtnPressOut = (item) =>{
        setPressedButton("")
        Linking.openURL(item.url);
    } 

    const renderItem = ({item}) => (
        <TouchableOpacity
            style={pressedButton == item.id ? styles.followButtonPressed : styles.followButton}
            activeOpacity={1}
            delayPressIn={100}
            delayPressOut={100}
            delayLongPress={100}
            onPress={() => handleBtnPress(item)}
            onPressOut={() => handleBtnPressOut(item)}
        >
            <SvgImage 
                name={item.img}
                width={20}
                height={20}
                fill={pressedButton == item.id ? COLORS.white : COLORS.primary}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.containerFollow}>
            <Text style={styles.followTitle}>
                {t('footer.follow_title')}
            </Text>
            <Text style={styles.followText}>
            {t('footer.follow_subtitle')}
            </Text>
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={styles.followBtnsContainer}
                    data={buttonData}
                    numColumns={4}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>
        </View>
    )
}

export default FollowUs