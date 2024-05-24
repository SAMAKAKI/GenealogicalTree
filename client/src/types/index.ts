export type AlertData = {
  data: string,
  type: string
}

export type LoginType = {
  usernameOrEmail: string,
  password: string,
}

export type SignUpForm = {
  username: string,
  email: string,
  password: string,
  rePassword: string,
}

export type ContactUsForm = {
  title: string,
  description: string
}
