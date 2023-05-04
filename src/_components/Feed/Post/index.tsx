import { Image, Text, TouchableOpacity, View } from "react-native"
import { IPost } from "./types"
import styles from "./style"
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../../_services/UserService"
import { IUser } from "../../../_services/UserService/types"


const Post = (props: { post: IPost }) => {
  const [liked, setLiked] = useState<boolean>(false)
  const [commented, setCommented] = useState<boolean>(false)
  const [userLogged, setUserLogged] = useState<IUser>()

  const toggleLiked = async () => {
    setLiked(!liked)
  }

  const verifyLiked = async () => {
    const user = await getCurrentUser()
    setUserLogged(user)
    if (user.id) {
      setLiked(props.post.likes.includes(user.id))
    }
  }

  const avatarSorce = !props.post.user.avatar ?
    require('../../../_assets/images/user.png')
    : { uri: props.post.user.avatar }

  useEffect(() => {
    verifyLiked()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <TouchableOpacity>
          <Image style={styles.userImage} source={avatarSorce} />
        </TouchableOpacity>
        <Text style={styles.textUserName}>{props.post.user.name}</Text>
      </View>
      <View>
        <Image style={styles.postImage} source={{ uri: props.post.image }} />
      </View>
      <View style={styles.likedCommentContainer}>
        <TouchableOpacity onPress={() => toggleLiked()}>
          <Image
            style={styles.icon}
            source={liked ?
              require('../../../_assets/images/liked.png') :
              require('../../../_assets/images/notLiked.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={commented ?
              require('../../../_assets/images/commented.png') :
              require('../../../_assets/images/notCommented.png')}
          />
        </TouchableOpacity>
        <Text style={styles.textLiked}>
          Curtido por
          <Text style={[styles.textLiked, styles.textLikedBold]}>{` ${props.post.likes.length} pessoas`}</Text>
        </Text>
      </View>
    </View>
  )
}

export default Post