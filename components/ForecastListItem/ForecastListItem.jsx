import { Text, View, Image } from "react-native";
import { s } from "./ForecastListItem.style";

export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image}/>
      <Text style={[s.txt, s.day]}>{day}</Text>
      <Text style={[s.txt, s.date]}>{date}</Text>
      <Text style={[s.txt, s.temperature]}>{temperature}°</Text>
    </View>
  );
}
