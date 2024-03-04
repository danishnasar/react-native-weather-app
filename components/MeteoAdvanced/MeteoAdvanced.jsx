import { Text, View } from "react-native";
import { s } from "./MeteoAdvanced.style";

export function MeteoAdvanced({ sunrise, sunset, windspeed }) {

  return (
    <View style={s.container}>
        <View style={s.section}>
            <Text style={[s.txt, s.value]}>{sunrise}</Text>
            <Text style={[s.txt, s.label]}>Sunrise</Text>
        </View>
        <View style={s.section}>
            <Text style={[s.txt, s.value]}>{sunset}</Text>
            <Text style={[s.txt, s.label]}>Sunset</Text>
        </View>
        <View style={s.section}>
            <Text style={[s.txt, s.value]}>{windspeed} km/h</Text>
            <Text style={[s.txt, s.label]}>Windspeed</Text>
        </View>
    </View>
  );
}
