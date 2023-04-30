import { Dimensions, StyleSheet, } from "react-native"
import {colors} from "../../../app.json"

const { height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWithOutAccount: {
    marginTop: height * 0.04,
    alignItems: "center"
  },
  textSignIn: {
    fontSize: 14,
    color: colors.primaryColor,
    textDecorationLine: "underline",
    fontFamily: 'biennaleBold'
  }
});

export default styles