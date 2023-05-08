import { Image, Text, TouchableOpacity, View } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootSatckParamList } from "../../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { IFooter } from "./types";

const Footer = (props: IFooter) => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>();
  const menu = [
    {
      title: 'Home',
      onPress: () => { navigation.navigate('Home') },
      icon: require('../../../_assets/images/home.png'),
      iconActivated: require('../../../_assets/images/homeAtivo.png'),
    },
    {
      title: 'Publication',
      onPress: () => { navigation.navigate('Publication') },
      icon: require('../../../_assets/images/newPublication.png'),
      iconActivated: require('../../../_assets/images/newPublicationAtivo.png'),
    },
    {
      title: 'Profile',
      onPress: () => { navigation.navigate('Profile' ) },
      icon: require('../../../_assets/images/user.png'),
      iconActivated: require('../../../_assets/images/userAtivo.png'),
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {menu.map((btn, index) => (
          <TouchableOpacity
            key={index}
            onPress={btn.onPress}
          >
            <Image source={props.currentTab === btn.title ? btn.iconActivated : btn.icon} />
          </TouchableOpacity>
        ))}

      </View>
    </View>
  )
}

export default Footer