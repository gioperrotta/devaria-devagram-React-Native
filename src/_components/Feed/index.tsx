import { useEffect, useState } from "react"
import { ActivityIndicator, Alert, FlatList, View } from "react-native"
import { IUserData } from "../../_services/UserService/types"
import * as FeedService from "../../_services/FeedService"
import { IPost } from "./Post/types"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../_routes/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import Post from "./Post"
import { colors } from "../../../app.json"

const Feed = (props: { isProfileFeed?: boolean, profile?: IUserData }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [posts, setPosts] = useState<IPost[]>([])

  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Home'>
  const navigation = useNavigation<navigationTypes>();

  const loadPosts = async () => {
    if ((props.isProfileFeed && props.profile?.id) || !props.isProfileFeed) {
      try {
        setLoading(true)
        const { data } = await FeedService.getPosts(props?.profile?.id)
        const postsFormated: IPost[] = data.map((post: any) => {
          const postFormated: IPost = {
            id: post._id,
            image: post.foto,
            description: post.descricao,
            user: {
              name: post.user.nome,
              avatar: post.user.avatar,
            },
            comments: post.comentarios.map((c: any) => {
              return {
                name: c.nome,
                message: c.comentario,
                userId: c.userId
              }
            }),
            likes: post.likes
          }
          return postFormated
        })
        setPosts(postsFormated)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
        Alert.alert('Erro', 'Erro ao carregar o Feed ' + error)
      }
    }
  }

  useEffect(() => {
    loadPosts()
    navigation.addListener('focus', () => {
      loadPosts()
    })
  }, [props])

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id?.toString()}
        renderItem={({ item }) => (<Post post={item}/>)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => (
          loading ?
            <View>
              <ActivityIndicator size={30} color={colors.primaryColor} />
            </View>
            :
            null
        )}
      />
    </View>
  )
}

export default Feed