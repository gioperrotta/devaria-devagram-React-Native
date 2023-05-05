import { useState } from "react"
import { Alert, Text, TextInput, View } from "react-native"
import { IComentsProps, IComment } from "./types"
import styles from "./styles"
import Avatar from "../Avatar"
import { IUser } from "../../../_services/UserService/types"

import * as FeedService from '../../../_services/FeedService'

const Comments = (props: IComentsProps) => {

  const [comment, setComment] = useState<string>('')
  const [comments, setComments] = useState<IComment[]>(props.comments)

  const onComment = async () => {
    try {
      if (props.userLogged && props.userLogged.name && props.userLogged.id) {
        await FeedService.sendComment(props.idPost, comment)
        const commentList = comments
        commentList.push({
          message: comment,
          name: props.userLogged.name,
          userId: props.userLogged.id,
        })
        setComments(commentList)
      }
      setComment('')  
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Erro ao enviar o comentário: " + error)
    }
  }

  return (
    <View>
      <View style={styles.containerComments}>
        {comments?.length > 0 &&
          comments.map((comment: IComment, index: number) => (
            <View key={index} style={styles.comment}>
              <Text style={styles.textUserName}>
                {comment.name}
                <Text style={styles.textComment}>
                  {' ' + comment.message}
                </Text>
              </Text>
            </View>
          ))}
        {props.commentInputActive &&
          <View style={styles.containerInputComment}>
            <Avatar user={props.userLogged} />
            <TextInput
              style={styles.inputComment}
              placeholder="Adicione um comentário"
              value={comment}
              onChangeText={val => setComment(val)}
              onSubmitEditing={onComment}
              autoCapitalize='none'
            />
          </View>
        }
      </View>
    </View>
  )
}

export default Comments