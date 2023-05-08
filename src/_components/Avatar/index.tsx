import { Image, TouchableOpacity } from "react-native"
import styles from "./styles"
import { IUser, IUserData } from "../../_services/UserService/types"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootSatckParamList } from "../../_routes/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "../../../app.json"

const Avatar = (props: { withBorder?: boolean, user: IUserData | IUser, image?: any }) => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Home'>
  const navigation = useNavigation<navigationTypes>();

  return (
    props.withBorder ?
      <LinearGradient
        style={styles.borderImage}
        colors={[colors.primaryColor, colors.greenWaterColor]}
      >
        <Image
          style={styles.userImageWithBorder}
          source={props.image ? 
            {uri: props.image.uri} 
            :
            props.user.avatar ?
            { uri: props.user.avatar } :
            require('../../_assets/images/user.png')
          }
        />
      </LinearGradient>
      :
      <TouchableOpacity onPress={() => { navigation.navigate('Profile', props.user) }}>
        <Image
          style={styles.userImage}
          source={props.user.avatar ?
            { uri: props.user.avatar } :
            require('../../_assets/images/user.png')
          }
        />
      </TouchableOpacity>
  )
}

export default Avatar