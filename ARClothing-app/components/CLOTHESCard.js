import { View, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './button';
import { SubInfo, ClothesTitle, ClothesSize } from './SubInfo';

const CLOTHESCard = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View style={{
            backgroundColor: COLORS.gray,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{ width: "100%", height: 250 }}>
                <Image source={data.image} resizeMode={'contain'} style={{ width: "100%", height: "100%" }} />
                <CircleButton imgUrl={assets.heart} right={10} top={10} width={40} height={40} />
            </View>

            <SubInfo logo={data.brand_logo} />
            <View style={{ width: "100%", padding: SIZES.font }} >
                <ClothesTitle title={data.name} titleSize={SIZES.large} />
                <View style={{ marginTop: SIZES.font, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                    <ClothesSize size={data.size} />
                    <RectButton minWidth={100} fontSize={SIZES.font} handlePress={() => navigation.navigate("Details", { data })} />
                </View>
            </View>
        </View>
    )
}

export default CLOTHESCard