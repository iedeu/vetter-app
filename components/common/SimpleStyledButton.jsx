import React, { useState } from 'react'
import { Text, Linking, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as Feather from "react-native-feather";
import { useRouter } from 'expo-router';

import styles from './common.style';
import { images, COLORS } from '../../constants';

const SimpleStyledButton = ({title, onPress, disabled=false, loading=false}) => {
    const router = useRouter();
    const [buttonStyle, setButtonStyle] = useState("simpleStyledBtn"); //default style

    const handleBtnPress = () =>{
        setButtonStyle("simpleStyledBtnPressed");
    } 

    const handleBtnPressOut = () =>{
        setButtonStyle("simpleStyledBtn");
        onPress();
    } 

    const BtnIcon = () =>{
        if(loading){
            return( <ActivityIndicator size="small" color="#fff" /> );
        }else if(disabled){
            return null
        }else {
            return( <Feather.ArrowRight style={{color: COLORS.white}} /> );
        }
    }

    return (
        <TouchableOpacity 
            style={disabled ? styles.simpleStyledBtnDisabled : styles[buttonStyle]}
            disabled={disabled}
            activeOpacity={1}
            delayPressIn={100}
            delayPressOut={100}
            delayLongPress={100}
            onPress={() => handleBtnPress()}
            onPressOut={() => handleBtnPressOut()}
        >   
            <Text style={styles.simpleStyledBtnTitle}>
                {title}
            </Text>
            <BtnIcon />
        </TouchableOpacity>
    )
}

export default SimpleStyledButton