/* eslint-disable prettier/prettier */
export interface User {
  username: string,
  email: string,
  password: string,
  rePassword?: string,
  name?: string | null,
  age?: number | null,
  phoneNumber?: number | null,
  avatarImage?: string | null,
  state?: string | null
}
