import { Alert, Image, Text, TouchableOpacity, View } from "react-native"
import { IPost } from "./types"
import styles from "./style"
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../../_services/UserService"
import { IUser } from "../../../_services/UserService/types"
import Comments from "../Comments"


import * as FeedService from '../../../_services/FeedService'
import Avatar from "../../Avatar"


const Post = (props: { post: IPost }) => {
  const [liked, setLiked] = useState<boolean>(false)
  const [likes, setLikes] = useState<number>(props.post.likes.length)
  const [commented, setCommented] = useState<boolean>(false)
  const [commentInputActive, setCommentInputActive] = useState<boolean>(false)
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>(2)
  const [userLogged, setUserLogged] = useState<IUser>()

  const toggleLiked = async () => {
    try {
      if (liked) {
        setLikes(likes - 1)
      } else {
        setLikes(likes + 1)
      }
      setLiked(!liked)
      await FeedService.toggleLike(props.post.id)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Erro ao efetuar curtida/descurtida: " + error)
    }
  }

  const verifyLiked = async () => {
    if (userLogged?.id) {
      setLiked(props.post.likes.includes(userLogged.id))
    }
  }

  const verifyCommented = async () => {
    if (userLogged?.id) {
      setCommented(props.post.comments.find(comment => comment.userId === userLogged.id) ? true : false)
    }
  }

  const getUserLogged = async () => {
    const user = await getCurrentUser()
    setUserLogged(user)
  }

  useEffect(() => {
    getUserLogged()
    verifyLiked()
    verifyCommented()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Avatar user={props.post.user} />
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
        <TouchableOpacity onPress={() => setCommentInputActive(!commentInputActive)}>
          <Image
            style={styles.icon}
            source={commented || commentInputActive ?
              require('../../../_assets/images/commented.png') :
              require('../../../_assets/images/notCommented.png')}
          />
        </TouchableOpacity>
        <Text style={styles.textLiked}>
          Curtido por
          <Text style={[styles.textLiked, styles.textLikedBold]}>{` ${likes} pessoas`}</Text>
        </Text>
      </View>
      <View style={styles.containerDescription}>
        <Text numberOfLines={numberOfLines} style={styles.textDescription}>
          <Text style={styles.textUserName}>{props.post.user.name} </Text>
          {' ' + props.post.description}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim alias molestiae numquam quam, aperiam iure! Nobis architecto excepturi cum tempore commodi autem ad beatae earum a, libero quo ipsam repellat.
        </Text>
        {props.post.description.length > 90 &&
          <TouchableOpacity
            style={styles.containerMoreOrLess}
            onPress={() => setNumberOfLines(numberOfLines ? undefined : 2)}
          >
            <Text style={styles.textMoreOrLess}>
              {numberOfLines ? 'mais' : 'menos'}
            </Text>
          </TouchableOpacity>
        }
      </View>
      {
        userLogged && <Comments
          idPost={props.post.id}
          commentInputActive={commentInputActive}
          comments={props.post.comments}
          userLogged={userLogged}
        />
      }

    </View>
  )
}

export default Post