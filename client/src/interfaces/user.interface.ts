export interface User {
  username: string | null,
  email: string | null,
  password: string,
  rePassword?: string,
  name?: string | null,
  age?: string | null,
  phoneNumber?: string | null,
  avatarImage?: string | null,
  state?: string | null,
  dateOfRegister?: Date
}
