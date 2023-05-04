import { IUser } from "../../../_services/UserService/types";
import { IComment } from "../Comments/types";

type UserPost = {
  name: string,
  avatar: string
}

export interface IPost {
  id: string,
  user: UserPost,
  image: string,
  description: string,
  likes: string[],
  comments: IComment[]
}

