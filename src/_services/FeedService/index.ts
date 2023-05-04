import AsyncStorage from "@react-native-async-storage/async-storage"
import * as DevagramApiService from "../DevagramApiService"

const getPosts = async (id?: string) => {
  const url = !id ? `/feed` : `/feed?id=${id}`
  return await DevagramApiService.get(url)
}

export {  getPosts }