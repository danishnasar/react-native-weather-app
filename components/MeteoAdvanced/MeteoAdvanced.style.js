import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000005c',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 2
  },
  txt: {
    color: "#fff",
    fontFamily: "Alata-Regular",
  },
  section: {
    alignItems: 'center'
  },
  label: {
    fontSize: 21
  },
  value: {
    fontSize: 15
  }
});
