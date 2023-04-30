import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/_routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    'biennale': require('./assets/fonts/BiennaleRegular.otf'),
    'biennaleBold': require('./assets/fonts/BiennaleBold.otf')
  });

  return (
    fontsLoaded ? (
      <NavigationContainer>{<Routes/>}</NavigationContainer>

    ) : (
      <AppLoading />
    )
  );
}


