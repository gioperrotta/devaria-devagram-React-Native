import { Alert, Text, TouchableOpacity, View } from "react-native"
import Avatar from "../Avatar"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../_routes/RootStackParams"

import { IUser, IUserData } from "../../_services/UserService/types"
import * as UserService from '../../_services/UserService';
import styles from "./styles"
import { useState } from "react"

const UserInfos = (props: { profile: IUserData, userLogged: IUser }) => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Profile'>
  const navigation = useNavigation<navigationTypes>();
  
  const [followers, setFollowers] = useState<number>(props.profile.followers)
  const [followThisUser, setFollowThisUser] = useState<boolean>(props.profile.followThisUser)

  const toggleFollow = async () => {
    try {
      if (followThisUser) {
       setFollowers(followers - 1 )
       setFollowThisUser(false) 
      } else {
        setFollowers(followers + 1)
        setFollowThisUser(true)
      }
      
     
      await UserService.toggleFollow(props.profile.id)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Erro ao seguir ou dexar de seguir ' + error)     
    }
  }

  return (
    <View style={styles.container}>
      <Avatar withBorder={true} user={props.profile} />
      <View>
        <View style={styles.containerInfoProfile}>
          <View style={styles.containerInfo}>
            <Text style={styles.textNumber}>{props.profile.posts}</Text>
            <Text style={styles.placeholder}>Publicações</Text>
          </View>
          <View style={[styles.containerInfo, { marginHorizontal: 10 }]}>
            <Text style={styles.textNumber}>{followers}</Text>
            <Text style={styles.placeholder}>Seguidores</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.textNumber}>{props.profile.following}</Text>
            <Text style={styles.placeholder}>Seguindo</Text>
          </View>
        </View>
        <View style={[styles.containerInfo, { marginTop: 16 }]}>
          {props.profile.id === props.userLogged.id ?
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={() => navigation.navigate( 'EditProfile', props.profile)}
            >
              <Text style={styles.textButtonOutline}>Editar usuário</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={props.profile.followThisUser ? styles.outlineButton : styles.button}
              onPress={() => toggleFollow()}
            >
              <Text style={styles.textButton}>
                {followThisUser ? 'Deixar de Seguir' : 'Seguir'}
              </Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}

export default UserInfos