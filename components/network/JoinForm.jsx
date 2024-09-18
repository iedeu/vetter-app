import React, { useState } from 'react'
import { Text, FlatList, TextInput } from 'react-native'
import * as Feather from "react-native-feather";
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useTranslation } from 'react-i18next';

import CustomTextInput from '../common/CustomTextInput';
import CustomSelectInput from '../common/CustomSelectInput';
import CustomCheckbox from '../common/CustomCheckbox';
import SimpleStyledButton from '../common/SimpleStyledButton';
import styles from './network.style';
import { images, COLORS, EMAIL_REGEX } from '../../constants';
import { View } from '@bacons/react-views';



const JoinForm = ({title}) => {
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const [emailSenderResult, setemailSenderResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disabled, setdisabled] = useState(false);
    
    const {control, handleSubmit, formState: {errors},} = useForm();
    const countries = require('../../countries.json');

    const onApplyPressed = async(data)=> {
        setLoading(true);

        // Get the current language
        const currentLanguage = i18n.language;

        // url of attachment according to language. (en, de, it, el, tr)
        const attachmentUrl = `https://ied.eu/wp-content/uploads/2024/01/Vetter-Digital-Badge-${currentLanguage}.pdf`;
        
        try {
            const options = {
                method: "POST",
                url: `https://api.brevo.com/v3/smtp/email`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data: {
                    "to": [{
                        "email": data.email,
                        "name": data.fullname
                    }],
                    "templateid":1,
                    "attachment": [{"url":attachmentUrl, "name":"Vetter-Digital-Badge.pdf"}]
                },
            };
            const response = await axios.request(options);
            setemailSenderResult(response.data);
            setLoading(false);
            setdisabled(true);
          } catch (error) {
            alert(error);
          } finally {
            setLoading(false);
          }
    };
    console.log("Errors on form: ",errors);
    
    return (
        <View style={styles.iconListContainer}>
            <View style={styles.offsetIconContainer}>
                <Feather.Users style={styles.offsetIcon} width={30} height={30}/>
            </View>
            <Text style={styles.iconListTitle}>
                {title}
            </Text>
            <CustomTextInput 
                name="fullname"
                placeholder={t('network.fullname')}
                featherClass="User"
                control={control}
                rules={{required: t('network.required_field')}}
            />
            <CustomSelectInput 
                name="country"
                placeholder={t('network.country')}
                featherClass="MapPin"
                control={control}
                data={countries}
                rules={{required: t('network.required_field')}}
            />
            <CustomTextInput 
                name="organization"
                placeholder={t('network.organization')}
                featherClass="Briefcase"
                control={control}
                rules={{required: false}}
            />
            <CustomTextInput 
                name="email"
                placeholder={t('network.email')}
                featherClass="Mail"
                control={control}
                rules={{required: t('network.required_field'), pattern: {value: EMAIL_REGEX, message: t('network.email_not_valid')}}}
            />
            <CustomCheckbox
                name="newsletter"
                text={t('network.newsletter')}
                control={control}
            />
            <CustomCheckbox
                name="consent"
                text={t('network.consent')}
                control={control}
                rules={{required: t('network.required_field')}}
            />
            <SimpleStyledButton 
                title={disabled ? t('network.email_sent') : t('network.apply_now')}
                loading={loading}
                disabled={disabled} 
                onPress={handleSubmit(onApplyPressed)} 
            />
        </View>
    )
}

export default JoinForm