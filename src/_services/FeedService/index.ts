import AsyncStorage from "@react-native-async-storage/async-storage"
import * as DevagramApiService from "../DevagramApiService"

const getPosts = async (id?: string) => {
  const url = !id ? `/feed` : `/feed?id=${id}`
  return await DevagramApiService.get(url)
}

const toggleLike = async (postId: string) => {
  return await DevagramApiService.put(`like?id=${postId}`)
}

const sendComment = async (postId: string, message: string) => {
  return await DevagramApiService.put(`comentario?id=${postId}`, { "comentario": message })
}

const sendPost = async (body: FormData) => {
  await DevagramApiService.post('/publicacao', body, {"content-Type": "multipart/form-data"})
}

export { getPosts, toggleLike, sendComment, sendPost }