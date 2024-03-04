import axios from "axios";

export async function getWeather(coords) {
  try {
    const weatherData = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );

    return weatherData.data;
  } catch (err) {
    return err;
  }
}

export async function getCity(coords) {
  try {
    const { address: {city, village, town, country } } = (await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}&accept-language=en`
    )).data;

    return city || village || town || country;
  } catch (err) {
    return err;
  }
}

export async function getCoords(city) {
  try {
    const { latitude: lat, longitude: lng } = (await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    )).data.results[0];

    return { lat, lng }
  } catch (err) {
    throw "Invalid city name!"
  }
}
