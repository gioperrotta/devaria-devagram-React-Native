import { Dimensions, StyleSheet, } from "react-native"
import { colors } from "../../../../app.json"

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginBottom: 20
  },
  textUserName: {
    marginLeft: 8,
    fontFamily: 'biennaleBold',
    fontSize: 12,
    color: colors.grayColor04
  },
  postImage: {
    height: height / 2,
    width
  },

  likedCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 16,
  },
  icon: {
    marginLeft: 12
  },
  textLiked: {
    marginLeft: 12,
    fontSize: 10,
    fontFamily: 'biennale',
    color: colors.grayColor04,
  },
  textLikedBold: {
    fontFamily: 'biennaleBold'
  },

  containerDescription: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: "row"
  },
  textDescription : {
    width: width/1.8,
    fontSize: 12,
    fontFamily: 'biennale',
    color: colors.grayColor04,
  },
  containerMoreOrLess: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  textMoreOrLess: {
    fontSize: 12,
    color:colors.greenWaterColor
  }

})

export default styles