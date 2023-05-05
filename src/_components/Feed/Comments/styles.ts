import { Dimensions, StyleSheet, } from "react-native"
import { colors } from "../../../../app.json"

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  containerComments: {
    marginHorizontal: 16,
    marginTop: 8
  },
  comment: {
    marginTop: 5
  },
  textUserName: {
    fontFamily: 'biennaleBold',
    fontSize: 12,
    color: colors.grayColor04
  },
  textComment: {
    fontSize: 12,
    fontFamily: 'biennale',
  },
  containerInputComment: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  inputComment: {
    color:colors.grayColor02,
    width: width/1.7,
    height: height/22,
    paddingHorizontal: 8,
    fontFamily: 'biennale',
    fontSize: 12
  }

})

export default styles