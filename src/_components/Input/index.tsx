import { Image, TextInput, View } from "react-native"
import { IInput } from "./types"
import { styles } from "./styles"

const Input = (props: IInput) => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.row}>
        {props.icone && <Image source={props.icone}/>}
        <TextInput
          style={[styles.input, props.style]}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          onChangeText={props.onChangeText}
          autoCapitalize="none"
        />
      </View>
    </View>
  )
}

export default Input