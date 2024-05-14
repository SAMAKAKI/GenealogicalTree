/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

interface User{
  id: number,
  username: string,
  email: string,
  password: string
}

@Injectable()
export class UserService {
  private readonly users: User[] = []

  findAll(): User[]{
    return this.users
  }
}
