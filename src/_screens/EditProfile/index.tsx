import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Container from "../../_components/Container"
import Avatar from "../../_components/Avatar"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../_routes/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import * as ImagePicker from "expo-image-picker"
import * as UserService from '../../_services/UserService';

import styles from './styles'
import { useState } from "react"


const EditProfile = () => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Profile'>
  const navigation = useNavigation<navigationTypes>();
  const profile = navigation.getState().routes.find(route => route.name === "EditProfile")?.params

  const [name, setName] = useState<string>('')
  const [hasName, setHasName] = useState<boolean>(false)
  const [image, setImage] = useState<any>()

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })  
    if (!result.cancelled) {
      setImage(result)
    }
  }

  const editProfile = async () => {
    if (image || name) {
      try {
        const body = new FormData()
        if (image) {
          const file: any = {
            uri: image.uri,
            type: `image/${image.uri.split('/').pop().split('.').pop()}`,
            name: image.uri.split('/').pop()
          }
          body.append("file", file)
        }
        if (name) {
          body.append("nome", name)
        }
        await UserService.update(body)
        navigation.goBack()
      } catch (error) {
        Alert.alert("Erro", "Erro ao alterar as infromações do Perfil")
      }
    }
  }

  return (
    <Container
      headerProps={{
        editProfileHeader: {
          submit: editProfile,
          submitEnable: image || name
        }
      }}
      footerProps={{ currentTab: 'Profile' }}
    >
      <View>
        {profile &&
          <View style={styles.containerImage}>
            <Avatar user={profile} image={image} withBorder={true} />
            <TouchableOpacity onPress={() => pickImage()}>
              <Text style={styles.textUpdateImage}>Alterar foto de perfil</Text>
            </TouchableOpacity>
          </View>
        }
        <View>
          <View style={styles.containerEditName}>
            <View style={styles.containerRowEditName}>
              <Text style={styles.textName}>Nome</Text>
              {!hasName ? (
                <Text style={styles.textNameUser}>{profile?.name}</Text>
              ) : (
                <TextInput
                  placeholder='Digite um nome'
                  style={styles.input}
                  value={name}
                  onChangeText={(n) => setName(n)}
                  autoCapitalize={'none'}
                />
              )}

              <TouchableOpacity style={styles.buttomDelete} onPress={() => setHasName(!hasName)}>
                <Image source={require('../../_assets/images/limpar.png')} />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </Container>
  )
}

export default EditProfile