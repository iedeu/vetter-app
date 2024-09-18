import React, { useState } from 'react'
import { Text, FlatList } from 'react-native'
import * as Feather from "react-native-feather";
import { Controller } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list';

import styles from './common.style';
import { images, COLORS, FONT } from '../../constants';
import { View } from '@bacons/react-views';

const CustomSelectInput = ({control, name, featherClass, placeholder, data, rules={} }) => {
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
                        <SelectList
                            setSelected={(val) => onChange(val)} 
                            save="value"
                            onBlur={onBlur} 
                            placeholder={placeholder}
                            placeholderTextColor={'#AAAAAA'} //not working..
                            data={data}
                            fontFamily={FONT.regular}
                            dropdownStyles={{borderWidth: 0, }}
                            boxStyles={{borderWidth: 0, paddingLeft: 0, paddingVertical: 3,marginRight: 0, width: 200}}
                        />
                    </View>
                    {error && <Text style={styles.errorText} >{error.message}</Text>}
                </>
            )}
        />
    )
}

export default CustomSelectInput