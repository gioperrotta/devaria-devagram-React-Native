import { Dimensions, StyleSheet, } from "react-native"
import {colors} from "../../../app.json"

const { height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.grayColor05
  }
  
});

export default styles