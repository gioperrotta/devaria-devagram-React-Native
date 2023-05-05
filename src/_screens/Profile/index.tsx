import { Text, View } from "react-native"
import Container from "../../_components/Container"
import Feed from "../../_components/Feed"

const Profile = () => {
  return (
    <Container
      headerProps={{ default: true}}
      footerProps={{ currentTab: 'Profile' }}
    >
      <View>
        <Feed />
      </View>
    </Container>
  )
}

export default Profile