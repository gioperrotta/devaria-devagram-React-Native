import { Dimensions, StyleSheet, } from "react-native"
import { colors } from "../../../../app.json"

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.09,
    backgroundColor: colors.whiteColor,
    borderBottomColor: colors.grayColor01,
    borderBottomWidth: 1
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    paddingVertical: 20
  },
  icon: {
    marginHorizontal: 9,
  },

  containerInputSearch: {
    flexDirection: 'row',
    width: width / 1.8,
    height: 40,
    backgroundColor: colors.lightBlueColor,
    alignItems: 'center',
    borderRadius: 4
  },

  input: {
    width: width / 2.1,
    paddingHorizontal: 12,
    fontFamily: 'biennale',
    color: colors.grayColor04

  },
  inputActive: {
    width: width / 2.1,
    paddingHorizontal: 12,
    fontFamily: 'biennale',
    color: colors.primaryColor
  },
  containerProfile: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16
  },
  textName: {
    fontFamily: 'biennaleBold',
  },
  textCancel: {
    color: colors.grayColor03,
    fontFamily: 'biennale',
    fontSize: 12,
    fontWeight: "500"
  },
  textSubmit: {
    color: colors.primaryColor,
    fontFamily: 'biennale',
    fontSize: 12,
    fontWeight: "700"
  },
  textSubmitDisabled: {
    color: colors.grayColor01,
    fontFamily: 'biennale',
    fontSize: 12,
    fontWeight: "700"
  }
})

export default styles