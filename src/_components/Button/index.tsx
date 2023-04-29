import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { IButton } from "./types"
import { colors } from "../../../app.json"
import { styles } from "./style"

const Button = (props: IButton) => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity
        onPress={props.onPress}
        style={props.disabled ? [styles.button, props.style, styles.buttonDisabled] : [styles.button, props.style]}
        disabled={props.disabled}
      >
        {props.loading ?
          <ActivityIndicator size={30} color={colors.whiteColor} />
          :
          <Text style={styles.text}>{props.placeholder}</Text>
        }
      </TouchableOpacity>
    </View>

  )
}

export default Button