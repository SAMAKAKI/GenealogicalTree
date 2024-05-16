/* eslint-disable prettier/prettier */
export interface User {
  username: string,
  email: string,
  password: string,
  rePassword?: string,
  name?: string | null,
  age?: string | null,
  phoneNumber?: string | null,
  avatarImage?: string | null,
  state?: string | null,
  dateOfRegister: Date
}
