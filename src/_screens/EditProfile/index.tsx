import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Container from "../../_components/Container"
import Avatar from "../../_components/Avatar"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../_routes/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import * as ImagePicker from "expo-image-picker"

import styles from './styles'
import { useState } from "react"


const EditProfile = () => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Profile'>
  const navigation = useNavigation<navigationTypes>();
  const profile = navigation.getState().routes.find(route => route.name === "EditProfile")?.params

  const [name, setName] = useState<string>('')
  const [hasName, setHasName] = useState<boolean>(true)
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

  return (
    <Container
      headerProps={{
        editProfileHeader: {
          submit: () => { }
        }
      }}
      footerProps={{ currentTab: 'Profile' }}
    >
      <View>
        {profile &&
          <View style={styles.containerImage}>
            <Avatar user={profile} withBorder={true} />
            <TouchableOpacity onPress={() => pickImage()}>
              <Text style={styles.textUpdateImage}>Alterar foto de perfil</Text>
            </TouchableOpacity>
            <View>
              <View style={styles.containerEditName}>
                <View style={styles.containerRowEditName}>
                  <Text style={styles.textName}>Nome</Text>
                  {!hasName ? (
                    <Text style={styles.textNameUser}>{profile.name}</Text>
                  ) : (
                    <TextInput
                      placeholder='Digite um nome'
                      style={styles.input}
                      value={name}
                      onChangeText={(n) => setName(n)}
                      autoCapitalize={'characters'}
                    />
                  )}

                  <TouchableOpacity style={styles.buttomDelete} onPress={() => setHasName(!hasName)}>
                    <Image source={require('../../_assets/images/limpar.png')} />
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        }
      </View>
    </Container>
  )
}

export default EditProfile