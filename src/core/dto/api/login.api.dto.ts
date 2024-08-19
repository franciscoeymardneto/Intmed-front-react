export type ApiLoginResquest = {
  username: string
  password: string
}

export type ApiLoginResponse = {
  token: string
  userid: number
  username: string
}
