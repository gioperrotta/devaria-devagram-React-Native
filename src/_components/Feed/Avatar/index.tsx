import { Image, TouchableOpacity } from "react-native"
import styles from "./styles"
import { IUser, IUserData } from "../../../_services/UserService/types"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../../_routes/RootStackParams"
import { useNavigation } from "@react-navigation/native"

const Avatar = (props: { user : IUserData | IUser}) => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Home'>
  const navigation = useNavigation<navigationTypes>();

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('Profile', props.user)} }>
      <Image
        style={styles.userImage}
        source={props.user.avatar ?
          { uri: props.user.avatar } :
          require('../../../_assets/images/user.png')
        }
      />
    </TouchableOpacity>
  )
}

export default Avatar