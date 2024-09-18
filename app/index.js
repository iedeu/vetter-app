import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import store from '../store/store';

import { LogoSection, ButtonGrid, LanguageSelector} from '../components';

const Home = () => {

    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 15, paddingBottom: "10%" }} keyboardShouldPersistTaps={'handled'}>
                    <View style={{ flex: 1, padding: 0, justifyContent:"flex-top" }}>
                        <LogoSection />
                        <ButtonGrid />
                    </View>
                </ScrollView>
                <LanguageSelector />
            </SafeAreaView>
            <StatusBar style="dark" />
        </Provider>
    )
}

export default Home;