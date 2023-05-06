import { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import { IUserData } from "../../../../_services/UserService/types"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../../../_routes/RootStackParams"
import * as UserService from "../../../../_services/UserService"
import { colors } from "../../../../../app.json"
import styles from "./styles"
import Avatar from "../../../Avatar"


const Search = (props: { filter: string }) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [users, setUsers] = useState<IUserData[]>([])

  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>()

  const findUsers = useCallback(async (filter: string) => {
    try {
      setLoading(true)
      const { data } = await UserService.search(filter)
      const usersFormated: IUserData[] = data?.map((user: any, index: number) => {
        const userFormated: IUserData = {
          index,
          id: user._id,
          name: user.nome,
          email: user.email,
          avatar: user.avatar,
          posts: user.publicacoes,
          followers: user.seguidores,
          following: user.seguindo,
          followThisUser: !data.degueEsseUsuario ? data.degueEsseUsuario : false
        }
        return userFormated
      })
      setUsers(usersFormated)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [users])

  useEffect(() => {
    setUsers([])
    if (props.filter.length > 2) {
      findUsers(props.filter)
    }
  }, [props.filter])

  const renderItem = (user: IUserData) => (
    <TouchableOpacity
      style={(user.index && user.index % 2) === 0 ? styles.backgroundPair : styles.backgroundOdd}
      onPress={() => {}}
    >
      <View style={styles.row}>
        <View>
          <Avatar user={user} />
        </View>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View>
      {users.length > 0 &&
        <FlatList
          data={users}
          keyExtractor={item => item.id?.toString()}
          renderItem={({ item }) => renderItem(item)}
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
      }
    </View>
  )
}

export default Search