import { useTranslation } from "react-i18next";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import {View, Text, Button, Colors, TextField} from 'react-native-ui-lib';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import { I18nManager } from "react-native";

import { SettingUIStyles } from "../../styles/components/setting/SettingStyle";
import { AddTaskFormStyles } from "../../styles/components/AddTaskFormStyle";
import { SettingScreenStyles } from "../../styles/screens/setting";
import { SendEmail } from "../../service/SendEmail";

export function SettingScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [contactFormVisible, setcontactFormVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const { t, i18n } = useTranslation();
    
    const changeLanguageHandler = async (language: string) => {
        i18n.changeLanguage(language);
        const lang = language
    
        const isLangRTL = lang === 'fa';
    
        /** 1.  */
        await AsyncStorage.setItem("language", lang);
    
        /** 2.  */
        await i18n.changeLanguage(lang);
    
        /** 3. */
        if (isLangRTL !== I18nManager.isRTL) {
          /** Change app direction */
          await I18nManager.allowRTL(isLangRTL);
          await I18nManager.forceRTL(isLangRTL);
          /** Force restart for the changes to take effect */
          RNRestart.Restart();
        }
        cancel();
    }

    const sendEmail = () => {
        SendEmail("alphanix.contacts@gmail.com",
                    subject,
                    body);
    }

    const cancel = () => {
        setModalVisible(!modalVisible);
    }
    
    const onChangeSubject = (text: string) => {
        setSubject(text);
    }

    const onChangeBody = (text: string) => {
        setBody(text);
    }

    return (
        <View style={ SettingScreenStyles.container }>
            <View style={ SettingScreenStyles.taskListContainer }>
                <View style={ SettingUIStyles.container }>
                    <Button onPress={() => {setModalVisible(!modalVisible)}} style={ SettingUIStyles.button } iconOnRight backgroundColor={Colors.red30} flex size={Button.sizes.large}>
                        <Text color={Colors.white}>
                            {t('language')}
                        </Text>
                        <View flex right>
                        <FontAwesome name={'angle-right'} size={20} color="white"/>
                        </View>
                    </Button>
                    <Modal
                        animationIn={"slideInUp"}
                        isVisible={modalVisible}
                        onBackdropPress= {cancel}
                        style={AddTaskFormStyles.container}
                        >
                        <View flex center>
                            <Button  label={"English"} onPress={() => {changeLanguageHandler("en")}} backgroundColor={'#005EFF'}/>
                            <Button label={"فارسی"} onPress={() => {changeLanguageHandler("fa")}} backgroundColor={'#005EFF'} marginT-5/>
                        </View>
                    </Modal>
                </View>
                <View style={ SettingUIStyles.container }>
                    <Button onPress={() => {setcontactFormVisible(!contactFormVisible)}} style={ SettingUIStyles.button } iconOnRight backgroundColor={Colors.red30} flex size={Button.sizes.large}>
                        <Text color={Colors.white}>
                            {t('contactUs')}
                        </Text>
                        <View flex right>
                            <FontAwesome name={'angle-right'} size={20} color="white"/>
                        </View>
                    </Button>
                    <Modal
                        animationIn={"slideInUp"}
                        isVisible={contactFormVisible}
                        onBackdropPress={() => {setcontactFormVisible(!contactFormVisible)}}
                        style={AddTaskFormStyles.container}
                    >
                        <View style={SettingUIStyles.contactModalView }>
                            <TextField
                                placeholder={t("subject")}
                                floatingPlaceholder
                                onChangeText={onChangeSubject}
                                enableErrors
                                validate={['required', 'email', (value) => value.length > 6]}
                                validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
                                showCharCounter
                                maxLength={30}
                                white={true}
                                fieldStyle={SettingUIStyles.subjectFieldStyle}
                            />
                            <TextField
                                placeholder={t("message")}
                                white={true}
                                multiline={true}
                                floatingPlaceholder
                                onChangeText={onChangeBody}
                                enableErrors
                                validate={['required', 'email', (value) => value.length > 6]}
                                validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
                                showCharCounter
                                maxLength={180}
                                numberOfLines={5}
                                fieldStyle={SettingUIStyles.messageFieldStyle}
                            />
                            <Button label={t("send")} onPress={sendEmail} backgroundColor={Colors.blue20}/>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>
    );
};