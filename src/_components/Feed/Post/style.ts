import { Dimensions, StyleSheet, } from "react-native"
import {colors} from "../../../../app.json"

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
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 10
  },
  textUserName:{
    marginLeft: 8,
    fontFamily: 'biennaleBold',
    fontSize: 12,
    color: colors.grayColor04
  },
  postImage: {
    height: height/2,
    width
  },

  likedCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 16,
  },
  icon:{
    marginLeft: 12
  },
  textLiked: {
    marginLeft: 12,
    fontSize: 10,
    color: colors.grayColor04,
    fontFamily: 'biennale'
  },
  textLikedBold: {
    fontFamily: 'biennaleBold'
  }

})

export default styles