import { SafeAreaView, Text, Image, StatusBar, FlatList } from "react-native";
import { FocusedStatusBar } from '../components';
import { COLORS, FONTS, SIZES } from "../constants";

const Details = ({ route, navigation }) => {
    const { data } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} backgroundColor={COLORS.gray}>
            <FocusedStatusBar backgroundColor="#61dafb" barStyle={"dark-content"} />
            <Image source={data.model} resizeMode="contain" style={{ width: "100%", height: 500 }} />
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.medium }}>{data.description}</Text>
        </SafeAreaView>
    )
}

export default Details