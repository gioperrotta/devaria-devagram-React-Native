import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import Button from '../../_components/Button';
import Input from '../../_components/Input';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootSatckParamList } from '../../_routes/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as UserService from '../../_services/UserService';
import communStyles from '../../communStyles';

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>();

  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
 
  const onLogin = async () => {
    try {
      setLoading(true)
      await UserService.login({ email, senha: password })
      navigation.navigate('Home')
      setLoading(false)
    } catch (error) {
      console.log('error')
      setError('Erro ao efetuar Login, tente Novamnete')
      setLoading(false)
    }
  }

  const verifyLogged = useCallback(async () => {
    const user = await UserService.getCurrentUser()
    if (user?.token) {
      navigation.navigate('Home')
    }    
  },[])

  useEffect(() => {
     verifyLogged()
  }, [])

  return (
    <View style={styles.container} >
      <Image
        style={styles.logo}
        source={require('../../_assets/images/Logo.png')}
      />
      {error !== '' && <Text style={communStyles.textError}>{error}</Text>}
      <Input
        icone={require('../../_assets/images/envelope.png')}
        placeholder='Digite seu email'
        value={email}
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
        onPress={() => onLogin()}
        placeholder='Login'
        loading={loading}
        disabled={!email || !password}
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
