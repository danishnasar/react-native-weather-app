import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50
  },
  day: {
    fontSize: 20
  },
  date: {
    fontSize: 20
  },
  temperature: {
    minWidth: 50,
    textAlign: 'right'
  },
  txt: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Alata-Regular",
  }
});
