import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { IHeader } from "./types"
import styles from "./styles"
import { colors } from "../../../../app.json"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../../_routes/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Header = (props: IHeader) => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Profile'>
  const navigation = useNavigation<navigationTypes>();

  const logout = async () => {
    await AsyncStorage.removeItem('token')
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      {
        props.default &&
        <View style={styles.row}>
          <View>
            <Image style={styles.icon} source={require('../../../_assets/images/logoHorizontal.png')} />
          </View>

          <View style={props?.searchBar?.value.length == 0 ? styles.containerInputSearch : [styles.containerInputSearch, { borderColor: colors.primaryColor, borderWidth: 1 }]}>
            <Image
              source={require('../../../_assets/images/search.png')}
              style={styles.icon}
            />

            <TextInput
              placeholder='Pesquisar'
              style={props?.searchBar?.value.length == 0 ? styles.input : styles.inputActive}
              value={props?.searchBar?.value}
              onChangeText={props?.searchBar?.onChange}
              autoCapitalize={'none'}
            />
          </View>
        </View>
      }
      {
        props.profileHeader &&
        <View style={styles.containerProfile}>
          <View>
            {props.profileHeader.isExternalProfile &&
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../../_assets/images/voltar.png')} />
              </TouchableOpacity>
            }
          </View>
          <Text style={styles.textName}>{props.profileHeader.userName}</Text>
          <View>
            {!props.profileHeader.isExternalProfile &&
              <TouchableOpacity onPress={() => logout()}>
                <Image source={require('../../../_assets/images/log-out.png')} />
              </TouchableOpacity>
            }
          </View>
        </View>
      }
      {
        props.editProfileHeader &&
        <View style={styles.containerProfile}>
          <View>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>

          </View>
          <Text style={styles.textName}>Editar Perfil</Text>
          <View>
            <TouchableOpacity onPress={() => props.editProfileHeader?.submitEnable && props.editProfileHeader?.submit()}>
              <Text
                style={props.editProfileHeader?.submitEnable ? styles.textSubmit : styles.textSubmitDisabled}
              >
                Concluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      {
        props.publicationHeader &&
        <View style={styles.containerProfile}>
          <View>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>

          </View>
          <Text style={styles.textName}>Nova Publicação</Text>
          <View>
            <TouchableOpacity onPress={() => props.publicationHeader?.submitEnable && props.publicationHeader?.submit()}>
              <Text
                style={props.publicationHeader?.submitEnable ? styles.textSubmit : styles.textSubmitDisabled}
              >
                Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>
      }

    </View>
  )
}

export default Header