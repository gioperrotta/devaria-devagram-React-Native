import { useEffect, useState } from "react"
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native"
import * as ImagePicker from "expo-image-picker"

import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import Container from "../../_components/Container"
import { RootSatckParamList } from "../../_routes/RootStackParams"
import * as FeedService from '../../_services/FeedService';
import styles from "./styles"

const Publication = () => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Publication'>
  const navigation = useNavigation<navigationTypes>();

  const [description, setDescription] = useState<string>('')
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

  const sendPublication = async () => {
    console.log('ESTOU AQUI')
    if (image && description) {
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
        if (description) {
          body.append("descricao", description)
        }
        await FeedService.sendPost(body)
        navigation.navigate('Home')
      } catch (error) {
        Alert.alert("Erro", "Erro ao enviar nova publicação")
      }
    }
  }

  useEffect(() => {
    pickImage()
  }, [])
  return (
    <Container
      headerProps={{
        publicationHeader: {
          submit: sendPublication,
          submitEnable: image && description
        }
      }}
      footerProps={{ currentTab: 'Publication' }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => pickImage()} style={styles.imageContainer}>
          <Image
            style={image ? styles.image : styles.imageDafault}
            source={image ? { uri: image.uri } : require('../../_assets/images/Camera.png')} />
        </TouchableOpacity>
        <TextInput
          style = {styles.description}
          placeholder="Escreva uma legenda..."
          multiline={true}
          value={description}
          onChangeText={value => setDescription(value)}
          autoCapitalize="none"
        />
      </View>
    </Container>
  )
}

export default Publication