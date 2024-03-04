import { Text, View, TouchableOpacity } from "react-native";
import { s } from "./Header.style";
import { useNavigation } from "@react-navigation/native";

export function Header ({ city }) {
    const navigate = useNavigation();
    return (
        <View style={s.container}>
            <TouchableOpacity style={s.back_btn} onPress={() => navigate.goBack()}>
                <Text style={s.txt}>{"<"}</Text>
            </TouchableOpacity>
            <View style={s.header_txts}>
                <Text style={s.txt}>{city?.toUpperCase()}</Text>
                <Text style={[s.txt, s.subtitle]}>7 day forecasts</Text>
            </View>
        </View>
    )
}