import { Dimensions, StyleSheet, } from "react-native"
import {colors} from "../../../../app.json"

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.05,
    backgroundColor: colors.lightBlueColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: height * 0.008
  }
  
});

export default styles