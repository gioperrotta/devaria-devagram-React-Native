import { Dimensions, StyleSheet, } from "react-native";
import {colors} from "../app.json";

const { height} = Dimensions.get('screen')

export const communStyles = StyleSheet.create({
  textError: {
    fontFamily: 'biennale',
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryColor,
    lineHeight: 21,
    marginBottom: height * 0.02
  },
})

export default communStyles