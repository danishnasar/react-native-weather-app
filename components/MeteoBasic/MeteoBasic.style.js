import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  txt: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Alata-Regular",
  },
  clock: { alignItems: "flex-end" },
  city: {},
  interpretation: { alignSelf: "flex-end", transform: [{ rotate: "-90deg" }] },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  image: {
    height: 90,
    width: 90
  },
  interpretationTxt: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Alata-Regular",
  },
  temperature: {
    color: "#fff",
    fontFamily: "Alata-Regular",
  },
});
