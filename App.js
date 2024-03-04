import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Alert, ImageBackground } from "react-native";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { useFonts } from "expo-font";
import { s } from "./App.style";
import { Home } from "./pages/Home/Home";
import { Forecasts } from "./pages/Forecasts/Forecasts";
import BackgroundImg from "./assets/background.png";
import { useState, useEffect } from "react";
import { getWeather, getCity, getCoords } from "./api/meteo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const navTheme = {colors: {background: "transparent"}};
export default function App() {
  const [coordinates, setCoordinates] = useState({});
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require('./assets/fonts/Alata-Regular.ttf')
  })

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      getWeatherofCoords(coordinates);
      getCityByCoords(coordinates);
    }
  }, [coordinates]);

  const getWeatherofCoords = async (coords) => {
    const weatherData = await getWeather(coords);
    setWeather(weatherData);
  };

  const getCityByCoords = async (coords) => {
    const cityData = await getCity(coords);
    if (typeof cityData !== 'object') setCity(cityData);
  };

  const getCoordsByCity = async (city) => {
    try {
      const coordsData = await getCoords(city);
      setCoordinates(coordsData);
    } catch (err) {
      Alert.alert(err);
    }
  };

  const getUserCoordinates = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinates({ lat: location.coords.latitude , lng: location.coords.longitude });
    } else {
      setCoordinates({ lat: "10.52",lng: "76.21" });
    }
  };
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground imageStyle={s.image} source={BackgroundImg} style={s.imageView}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded && weather && (
            <Stack.Navigator
            screenOptions={{ headerShown:false, animation: 'slide_from_right' }}
            initialRouteName="Home"
            >
              <Stack.Screen name="Home" >
                {() => <Home city={city} weather={weather} onSubmitSearch={getCoordsByCity} />}
              </Stack.Screen>
              <Stack.Screen name="Forecasts" component={Forecasts} />
            </Stack.Navigator>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
