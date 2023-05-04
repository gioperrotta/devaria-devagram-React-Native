import { Text, View } from "react-native"
import Container from "../../_components/Container"
import Feed from "../../_components/Feed"

const Home = () => {
  return (
    <Container
      headerProps={{ default: true}}
      footerProps={{ currentTab: 'Home' }}
    >
      <View>
        <Feed />
      </View>
    </Container>
  )
}

export default Home