import { Text, View } from "react-native";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { DAYS, weatherInterpretation } from "../../utils/meteoUtils";

export function Forecasts() {
  const { params } = useRoute();
  const getForeCast = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const image = weatherInterpretation(weatherCode).image;
        const temperature = params.temperature_2m_max[index];
        const date = new Date(time);
        const dayofWeek = DAYS[date.getDay()];
        const formattedDate = date.toLocaleDateString("default", {
            day: "numeric",
            month: "numeric"
        });
        const resultDate = formattedDate.split('/').map(item => item.toString().padStart(2, '0')).join('/');

        return <ForecastListItem key={time} image={image} day={dayofWeek} date={resultDate} temperature={temperature.toFixed(0)} />;
      })}
    </View>
  );

  return (
    <View style={s.container}>
      <Header city={params.city} />
      {getForeCast}
    </View>
  );
}
