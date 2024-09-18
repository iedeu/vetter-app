import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import * as Feather from "react-native-feather";
import { useRouter } from 'expo-router';

import styles from './screenheader.style'

const FeatherBackBtn = ({ iconClass, bgColor, color }) => {
  
  const router = useRouter();
  const FeatherComponent = Feather[iconClass]

  return (
    <TouchableOpacity style={styles.btnContainer(bgColor)} onPress={() => router.back()} >
        {FeatherComponent && <FeatherComponent style={{color: color}} />}
    </TouchableOpacity>
  )
}

export default FeatherBackBtn