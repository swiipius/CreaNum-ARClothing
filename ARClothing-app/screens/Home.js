import { useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { COLORS, FONTS, SIZES, CLOTHESData, assets } from '../constants';
import { CLOTHESCard, HomeHeader, FocusedStatusBar, CircleButton } from '../components';

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor="#61dafb" barStyle={"dark-content"} />
            <HomeHeader />
            <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, padding: SIZES.font }} >Last Scans :</Text>
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList data={CLOTHESData}
                        renderItem={({ item }) => <CLOTHESCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            <CircleButton
                imgUrl={assets.arkit}
                right={20}
                bottom={20}
                width={100}
                height={100}
                backgroundColor={COLORS.third}
                borderRadius={200}
                handlePress={() => navigation.navigate("ARKit")}
            />
        </SafeAreaView >
    )
}

export default Home