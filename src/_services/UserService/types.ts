export interface ILogin {
  email: string,
  senha: string,
}

export interface IUser {
  id: string | null,
  name: string | null,
  email: string | null,
  avatar: string | null,
  token: string | null,
}


export interface IUserData {
  id: string,
  name: string,
  email: string,
  avatar: string,
  followers: number;
  following: number,
  followThisUser: boolean,
  posts: number,
  index?: number
}