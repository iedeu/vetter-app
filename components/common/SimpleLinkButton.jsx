import React, { useState } from 'react'
import { Text, Linking, TouchableOpacity } from 'react-native'
import * as Feather from "react-native-feather";
import { useRouter } from 'expo-router';

import styles from './common.style';
import { images, COLORS } from '../../constants';

const SimpleLinkButton = ({title, link}) => {
    const router = useRouter();
    const [pressedButton, setPressedButton] = useState(false);

    const handleBtnPress = () =>{
        setPressedButton(true);
    } 

    const handleBtnPressOut = () =>{
        setPressedButton(false);
        link ? Linking.openURL(link) : null;
    } 

    return (
        <TouchableOpacity 
            style={pressedButton ? styles.linkButtonPressed : styles.linkButton} 
            activeOpacity={1}
            delayPressIn={100}
            delayPressOut={100}
            delayLongPress={100}
            onPress={() => handleBtnPress()}
            onPressOut={() => handleBtnPressOut()}
        >   
            <Text style={styles.linkButtonTitle}>
                {title}
            </Text>
            <Feather.ArrowRight style={{color: COLORS.white}} />
        </TouchableOpacity>
    )
}

export default SimpleLinkButton