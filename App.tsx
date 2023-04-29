import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Button from './src/_components/Button';
import Input from './src/_components/Input';
import { useState } from 'react';

export default function App() {
  const [eamil, setEmail] = useState<string>('');
  const [fontsLoaded] = useFonts({
    'biennale': require('./assets/fonts/BiennaleRegular.otf'),
    'biennaleBold': require('./assets/fonts/BiennaleBold.otf')
  });
  return (
    fontsLoaded ? (
      <View style={styles.container} >
        <Button
          onPress={() => {} }
          placeholder='Clique aqui'
          loading={false}
          disabled={false}
        />
        <Input
          placeholder='Digite seu email'
          value={eamil}
          onChangeText={(e) => {setEmail(e)}} 
        />
      </View>
    ) : (
      <AppLoading />
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
