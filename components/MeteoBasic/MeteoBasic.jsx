import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "./MeteoBasic.style";
import { useWindowDimensions } from "react-native";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function MeteoBasic({ city, interpretation, temperature, dailyWeather }) {
  const { height } = useWindowDimensions();
  const phoneDimention = 0.001237624;
  const navigate = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Text style={s.txt}>{city}</Text>
      </View>
      <View style={s.interpretation}>
        <Text style={s.interpretationTxt}>{interpretation?.label}</Text>
      </View>
      <View style={s.temperature_box}>
        <TouchableOpacity onPress={() => navigate.navigate("Forecasts", {city, ...dailyWeather})}>
        <Text style={[s.temperature, {fontSize: Math.round(100 * phoneDimention * height)}]}>{temperature}°</Text>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation?.image}/>
      </View>
    </>
  );
}
