import React, { useState } from 'react'
import { Text, FlatList, TextInput } from 'react-native'
import * as Feather from "react-native-feather";
import { Controller } from 'react-hook-form';

import styles from './common.style';
import { images, COLORS, FONT } from '../../constants';
import { View } from '@bacons/react-views';

const CustomTextInput = ({control, name, featherClass, placeholder, secureTextEntry, rules={} }) => {
    const FeatherComponent = Feather[featherClass];

    return (
        <Controller 
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState:{error}}) => (
                <>
                    <View style={[styles.customInputContainer, {borderColor: error ? 'red' : '#D8D8D8'}, {marginBottom: error ? "2%" : "7%"}]}>
                        <FeatherComponent style={{color: COLORS.secondary, marginRight: 10}} width={22} height={22} />
                        <TextInput 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            style={{fontFamily: FONT.regular, width: "100%"}}
                            placeholder={placeholder}
                            placeholderTextColor={'#AAAAAA'}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && <Text style={styles.errorText} >{error.message}</Text>}
                </>
            )}
        />
    )
}

export default CustomTextInput