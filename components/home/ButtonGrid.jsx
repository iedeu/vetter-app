import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Linking, ActivityIndicator, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from "react-i18next";

import SvgImage from '../common/SvgImage';
import styles from './home.style';
import { COLORS, icons, images, SIZES } from '../../constants';


const ButtonGrid = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const [pressedButton, setPressedButton] = useState("");

    //const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const itemData = [
        {id: "svg_1", img: "InfoSvg", title: t('home.about_btn'), link: "/about"},
        {id: "svg_2", img: "NetworkSvg", title: t('home.network_btn'), link: "/network-badge"},
        {id: "svg_3", img: "LaptopSvg", title: t('home.e_learning_btn'), link: "/e-learning"},
        {id: "svg_4", img: "CrossroadSvg", title: t('home.guide_btn'), link: "/methodological-guide"},
    ];

    // check if screen change dimensions (rotates) and update width, heigth.
    useEffect(()=>{
        const updateDimensions =  Dimensions.addEventListener('change', () => {
            setWindowDimensions(Dimensions.get('window'))
        });
        return () => updateDimensions?.remove(); //cleanup to avoid memory leaks etc.
    },[])

    const handleBtnPress = (item) =>{
        setPressedButton(item.id);
    } 

    const handleBtnPressOut = (item) =>{
        setPressedButton("")
        router.push({pathname : item.link});
    } 

    const renderItem = ({item}) => (
        <TouchableOpacity 
            style={pressedButton == item.id ? styles.boxButtonPressed : styles.boxButton} 
            activeOpacity={1}
            delayPressIn={100}
            delayPressOut={100}
            delayLongPress={100}
            onPress={() => handleBtnPress(item)}
            onPressOut={() => handleBtnPressOut(item)}
        >
            <SvgImage 
                name={item.img}
                width={50}
                height={50}
                fill={pressedButton == item.id ? COLORS.white : COLORS.black}
            />
            <Text style={pressedButton == item.id ? styles.buttonTitlePressed : styles.buttonTitle}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
    
        <FlatList
            contentContainerStyle={styles.gridContainer}
            data={itemData}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
        />
    )
}

export default ButtonGrid;