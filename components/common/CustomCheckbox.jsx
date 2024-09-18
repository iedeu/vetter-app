import React, { useState } from 'react'
import { Text, FlatList } from 'react-native'
import * as Feather from "react-native-feather";
import { Controller } from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import styles from './common.style';
import { images, COLORS, FONT } from '../../constants';
import { View } from '@bacons/react-views';

const CustomCheckbox = ({control, name, text, rules={} }) => {

    return (
        <Controller 
            control={control}
            name={name}
            rules={rules}
            render={({field: {onChange}, fieldState:{error}}) => (
                <>
                    <BouncyCheckbox 
                        onPress={onChange} 
                        text={text}
                        fillColor={COLORS.primary}
                        innerIconStyle={{ borderWidth: 1.5 }}
                        style={{alignItems: "flex-start", paddingBottom: "10%", paddingRight: "10%"}}
                        iconStyle={{marginTop: "2%"}}
                        textStyle={[{ fontFamily: FONT.regular, fontSize: FONT.small, textDecorationLine: "none"}, {color: error ? 'red' : '#707070'}]}
                    />
                </>
            )}
        />
    )
}

export default CustomCheckbox