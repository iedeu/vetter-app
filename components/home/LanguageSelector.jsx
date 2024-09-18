import { View, Text, } from 'react-native'
import { useRouter } from 'expo-router'
import * as Feather from "react-native-feather";
import { SelectList } from 'react-native-dropdown-select-list';
import { connect } from 'react-redux';
import i18n from 'i18next';

import { setLanguage, resetStores } from '../../store/actions'
import styles from './home.style';
import { COLORS, FONT} from '../../constants';

const LanguageSelector = ({setLanguage, resetStores}) => {
    const router = useRouter();
    const languages = [
        {
            "key": "en",
            "value": "English"
        },
        {
            "key": "de",
            "value": "Deutsch"
        },
        {
            "key": "el",
            "value": "Ελληνικά"
        },
        {
            "key": "it",
            "value": "Italiano"
        },
        {
            "key": "tr",
            "value": "Türkiye"
        },
    ]

    const onChange = (selected)=> {
        i18n.changeLanguage(selected);
        setLanguage(selected);
    }

  return (
    <View style={styles.languageSelectContainer}>
        <SelectList
            inputStyles={{color: "#fff"}}
            arrowicon={<Feather.ChevronDown style={{color: COLORS.white}} width={21} height={21} />}
            dropdownTextStyles={{color: "#fff"}}
            setSelected={(selected) => onChange(selected)} 
            save="key"
            search={false}
            placeholder="Select Your Language"
            placeholderTextColor='#fff' //not working..
            data={languages}
            fontFamily={FONT.regular}
            dropdownStyles={{borderWidth: 0, }}
            boxStyles={{borderWidth: 0, paddingLeft: 0, paddingRight: 0, paddingVertical: 3,marginRight: 0, width: "auto"}}
        />
    </View>
  )
}

export default connect( null, {setLanguage, resetStores} )(LanguageSelector);