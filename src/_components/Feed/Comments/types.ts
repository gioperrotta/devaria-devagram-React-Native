import { IUser } from "../../../_services/UserService/types"

export interface IComment {
  name: string,
  message: string,
  userId: string
}

export interface IComentsProps {
  idPost: string,
  comments: IComment[],
  commentInputActive: boolean,
  userLogged: IUser,
  // addNewComment: (comment: IComment) => void
}
