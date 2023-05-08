import { Dimensions, StyleSheet, TextInput, } from "react-native"
import {colors} from "../../../app.json"

const { width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height/7,
    borderBottomWidth: 1,
    borderBottomColor: colors.whiteColor,
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 16

  },
  imageContainer: {
    marginRight: 16
  },
  image: {
    width: 80,
    height: 80
  },
  imageDafault: {
    width: 80,
    height: 80,
    backgroundColor: colors.primaryColor
  },
  description: {
    flex: 1,
    fontFamily: 'biennale',
    fontWeight: "400",
    fontSize: 12,
    color: colors.grayColor02,
    height: height/30,
    paddingHorizontal: 5,
    bottom: 7
  }
});

export default styles