import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import Container from "../../_components/Container"
import Feed from "../../_components/Feed"
import UserInfos from "../../_components/UserInfos"

import { RootSatckParamList } from "../../_routes/RootStackParams"
import { IUser, IUserData } from "../../_services/UserService/types"
import * as UserService from '../../_services/UserService';

const Profile = () => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Profile'>
  const navigation = useNavigation<navigationTypes>();

  const profileParams = navigation.getState().routes.find(route => route.name === "Profile")?.params

  const [userLogged, setUserLogged] = useState<IUser>()
  const [profile, setProfile] = useState<IUserData>()


  const getProfile = async () => {
    try {
      const user = await UserService.getCurrentUser()
      setUserLogged(user)
      const userProfileId = !profileParams ? user?.id : profileParams?.id
      if (userProfileId) {
        const { data } = await UserService.getProfile(userProfileId)
        const profileFormated: IUserData = {
          id: data._id,
          name: data.nome,
          email: data.email,
          avatar: data.avatar,
          posts: data.publicacoes,
          followers: data.seguidores,
          following: data.seguindo,
          followThisUser: !data.degueEsseUsuario ? data.degueEsseUsuario : false
        }
        setProfile(profileFormated)
      }
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Erro ao carregar dados do perfil: " + error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [profileParams])
  return (
    <Container
      headerProps={{
        profileHeader: {
          userName: profile?.name || '',
          isExternalProfile: !(userLogged?.id === profile?.id)
        }
      }}
      footerProps={{ currentTab: userLogged?.id === profile?.id ? 'Profile' : 'Home' }}
    >
      <>
        {profile && userLogged &&
          <UserInfos profile={profile} userLogged={userLogged} />
        }
       
        <Feed
          isProfileFeed={true}
          profile={profile}
        />
      </>
    </Container>
  )
}

export default Profile