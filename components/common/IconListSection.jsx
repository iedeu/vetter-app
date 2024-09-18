import React, { useState } from 'react'
import { Text, FlatList, } from 'react-native'
import * as Feather from "react-native-feather";
import { useRouter } from 'expo-router';

import styles from './common.style';
import { images, COLORS } from '../../constants';
import { View } from '@bacons/react-views';

const IconListSection = ({title, itemList}) => {
    const router = useRouter();

    const renderItem = ({item}) => (
        <View style={{flexDirection: "row"}}>
            <Feather.ArrowRight style={{color: COLORS.primary}} />
            <Text style={styles.iconListText}>
                {item.text}
            </Text>
        </View>
    );

    return (
        <View style={styles.iconListContainer}>
            <View style={styles.offsetIconContainer}>
                <Feather.Users style={styles.offsetIcon} width={30} height={30}/>
            </View>
            <Text style={styles.iconListTitle}>
                {title}
            </Text>
            <FlatList 
                contentContainerStyle={styles.iconListInnerContainer}
                data={itemList}
                numColumns={1}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
        </View>
    )
}

export default IconListSection