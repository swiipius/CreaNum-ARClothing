import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants'

export const ClothesTitle = ({ title, titleSize }) => {
    return (
        <View>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
        </View>
    )
}

export const ClothesSize = ({ size }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font }}>{size}</Text>
        </View>
    )
}

export const BrandImg = ({ imgUrl, index }) => {
    return (
        <Image source={imgUrl} resizeMode='contain' style={{ width: 100, height: 50 }} />
    )
}

export const Brand = ({ logo }) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "end",
        }}>
            <BrandImg imgUrl={logo} />
        </View>
    )
}

export const SubInfo = ({ logo }) => {
    return (
        <View style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: "row",
            justifyContent: "flex-end",
        }}>
            <Brand logo={logo} />
        </View>
    )
}