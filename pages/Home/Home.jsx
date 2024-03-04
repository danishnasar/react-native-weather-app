import { Text, View } from "react-native";
import { s } from "./Home.style";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { weatherInterpretation } from "../../utils/meteoUtils";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Home({ city, weather, onSubmitSearch }) {
  const currentWeather = weather.current_weather;
  const dailyWeather = weather.daily;
  const currentInterpretation = weatherInterpretation(
    currentWeather?.weathercode
  );

  const getTime = (time) => {
    if (time) {
      const requiredTime = time.split("T")[1];
      const timeComponents = requiredTime.split(":");
      const timePeriod = timeComponents[0] > 12 ? "PM" : "AM";
      timeComponents[0] > 12
        ? (timeComponents[0] = (timeComponents[0] - 12)
            .toString()
            .padStart(2, "0"))
        : timeComponents[0].toString().padStart(2, "0");
      const resultTime = timeComponents.join(":");

      return `${resultTime} ${timePeriod}`;
    }
  };
  const sunrise = getTime(dailyWeather?.sunrise[0]);
  const sunset = getTime(dailyWeather?.sunset[0]);

  return (
    <View style={s.container}>
      <View style={s.basic_info}>
        <MeteoBasic
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather?.temperature)}
          dailyWeather={dailyWeather}
        />
      </View>
      <View style={s.input_section}>
        <SearchBar onSubmit={onSubmitSearch}/>
      </View>
      <View style={s.advanced_info}>
        <MeteoAdvanced
          sunrise={sunrise}
          sunset={sunset}
          windspeed={currentWeather?.windspeed}
        />
      </View>
    </View>
  );
}
