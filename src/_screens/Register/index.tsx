import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import Button from '../../_components/Button';
import Input from '../../_components/Input';

import UploadImage from '../../_components/UploadImage';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootSatckParamList } from '../../_routes/RootStackParams';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import communStyles from '../../communStyles'
import { validateConfirmPassword, validateEmail, validateName, validatePassword } from '../../_utils/validations'
import * as UserService from '../../_services/UserService';

const Register = () => {
  type navigationTypes = NativeStackNavigationProp<RootSatckParamList, 'Register'>
  const navigation = useNavigation<navigationTypes>();

  const [error, setError] = useState<string>('');
  const [image, setImage] = useState<any>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onRegister = async () => {
    try {
      setLoading(true)
      const body = new FormData()
      body.append("nome", name)
      body.append("email", email)
      body.append("senha", password)
      if (image) {
        const file: any = {
          uri: image.uri,
          type: `image/${image.uri.split('/').pop().split('.').pop()}`,
          name: image.uri.split('/').pop()
        }
      body.append("file", file)       
      }
      await UserService.register(body)
      await UserService.login({ email, senha: password })
      navigation.navigate('Home')
      setLoading(false)
    } catch (error) {
      console.log('error')
      setError('Erro ao efetuar Cadastro, tente Novamnete')
      setLoading(false)
    }
  }

  const formIsValid = () => {
    const nameIsValid = validateName(name)
    const emailIsValid = validateEmail(email)
    const passwordIsValid = validatePassword(password)
    const confirmPasswordIsValid = validateConfirmPassword(password, confirmPassword)

    if (!nameIsValid && name !== '') {
      setError('Nome Inválido')
    } else if (!emailIsValid && email !== '') {
      setError('Email Inválido')
    } else if (!passwordIsValid && password !== '') {
      setError('Senha Inválido')
    } else if (!confirmPasswordIsValid && confirmPassword !== '') {
      setError('Confirmação de senha não confere')
    } else { setError('')}
    return nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid
  }

  const disableButton = () => {
    return error !== '' || name === '' || email === '' || password === '' || confirmPassword === ''
  }

  useEffect(() => {
    formIsValid()
  }, [name, email, password, confirmPassword])

  return (

    <View style={styles.container} >
      <UploadImage setImage={setImage} image={image} />
      {error !== '' && <Text style={communStyles.textError}>{error}</Text>}
      <Input
        icone={require('../../_assets/images/user.png')}
        placeholder='Digite seu nome completo'
        value={name}
        onChangeText={(e: string) => { setName(e) }}
      />
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
      <Input
        icone={require('../../_assets/images/key.png')}
        placeholder='Confirmar senha'
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(e: string) => { setConfirmPassword(e) }}
      />
      <Button
        onPress={() => onRegister()}
        placeholder='Cadastrar'
        loading={loading}
        disabled={disableButton()}
      />
      <View style={styles.containerWithOutAccount}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSignIn}>Faça seu Login agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register
