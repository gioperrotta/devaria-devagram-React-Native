import { Dimensions, StyleSheet, } from "react-native"
import { colors } from "../../../../app.json"

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 10
  },
})

export default styles