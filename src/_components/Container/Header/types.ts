export interface IHeader {
  default?: boolean,
  searchBar?: ISearchBar,
  profileHeader?: IProfileHeader,
  headerNewPublication?: IHeaderNewPublication,
  editProfileHeader?: IEditProfileHeader,
  publicationHeader?: IPublicationHeader
}

export interface IHeaderNewPublication {
  onPressCancel: () => void,
  onPressContinue: () => void,
  continueEnabled: boolean
}

export interface ISearchBar{
  value: string,
  onChange: (value: string) => void
}

export interface IProfileHeader {
  userName: string,
  isExternalProfile: boolean
}

export interface IEditProfileHeader {
  submit: () => void,
  submitEnable?: boolean
}

export interface IPublicationHeader {
  submit: () => void,
  submitEnable?: boolean
}

