import { Dimensions, StyleSheet, } from "react-native"
import { colors } from "../../../app.json"

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 16
  },
  containerInfoProfile:{
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 24,
    alignItems: "center",
  },
  containerInfo: {
    alignItems: "center",
  },
  textNumber: {
    fontFamily: 'biennaleBold',
    color: colors.grayColor04,
    fontSize: 14
  },
  placeholder: {
    fontFamily: 'biennale',
    fontSize: 12,
    color: colors.grayColor04,
  },
  outlineButton: {
    width: 216,
    height: 28,
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonOutline:{
    fontSize: 12,
    color: colors.primaryColor,
    fontFamily: 'biennale'
  },
  button: {
    width: 216,
    height: 28,
    backgroundColor: colors.primaryColor,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 12,
    color: colors.whiteColor,
    fontFamily: 'biennale'
  }


})

export default styles