import { Dimensions, StyleSheet, } from "react-native"
import { colors } from "../../../app.json"

const styles = StyleSheet.create({
  borderImage: {
    width: 95,
    height: 95,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  userImageWithBorder: {
    width: 88,
    height: 88,
    borderRadius: 100
  },
  userImage: {
    backgroundColor: colors.whiteColor,
    width: 32,
    height: 32,
    borderRadius: 20
  },
})

export default styles