import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import Button from '../../_components/Button';
import Input from '../../_components/Input';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootSatckParamList } from '../../_routes/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>();
  const [eamil, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  return (
    <View style={styles.container} >
      <Image
        style={styles.logo}
        source={require('../../_assets/images/Logo.png')}
      />
      <Input
        icone={require('../../_assets/images/envelope.png')}
        placeholder='Digite seu email'
        value={eamil}
        onChangeText={(e: string) => { setEmail(e) }}
      />
      <Input
        icone={require('../../_assets/images/key.png')}
        placeholder='Digite sua senha'
        secureTextEntry={true}
        value={password}
        onChangeText={(e: string) => { setPassword(e) }}
      />
      <Button
        onPress={() => { }}
        placeholder='Login'
        loading={false}
        disabled={false}
      />
      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login
