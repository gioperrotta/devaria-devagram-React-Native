import { Image, TextInput, View } from "react-native"
import { IHeader } from "./types"
import styles from "./styles"
import { colors } from "../../../../app.json"

const Header = (props: IHeader) => {
  return (
     <View style={styles.container}>
      {
        props.default && (
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
        )
      }
    </View>
  )
}

export default Header