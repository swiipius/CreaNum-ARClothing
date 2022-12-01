import { View, Text, Image } from 'react-native'

import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,
            zIndex: 1
        }} >
            <View style={{
                flexDirection: "columns",
                justifyContent: 'space-between',
                alignItems: 'left',
            }} >
                {/* <Image source={assets.logo} resizeMode="contain" style={{ width: 90, height: 25 }} /> */}
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large }} >AR Clothing</Text>
            </View>

        </View>
    )
}

export default HomeHeader