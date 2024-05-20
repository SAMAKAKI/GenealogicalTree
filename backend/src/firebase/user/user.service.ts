/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { User } from 'src/interfaces/user.interface';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(private readonly adminService: AdminService, private readonly jwtService: JwtService){}

  async registerUser(data: User){
    const firestore = this.adminService.getFirestore();

    try{
      const username = await firestore.collection('users').where('username', '==', data.username).get()
      if(!username.empty)
        return { data: { success: {message: ''}, error: { message: "This username is already in use" }}}

      const email = await firestore.collection('users').where('email', '==', data.email).get()
      if(!email.empty)
        return { data: { success: {message: ''}, error: { message: "This email is already in use" } }}

      if(data.rePassword !== data.password)
        return { data: { success: {message: ''}, error: { message: "Password and Repeat password is not match" }}}
      
      const password = await bcrypt.hash(data.password, 10)
      const userData: User = {
        username: data.username,
        email: data.email,
        password,
        avatarImage: '',
        phoneNumber: '',
        name: '',
        age: '',
        state: '',
        dateOfRegister: new Date(Date.now())
      }
      const docRef = await firestore.collection('users').add(userData);
      
      if(docRef.id)
        return { data: {success: { message: "Successfully registered" }, error: { message: '' }}}
      else
        return { data: { success: {message: ''}, error: { message: "Something went wrong" }}}
    } catch (error){
      return { data: { success: {message: ''}, error: { message: "An error occurred while registering the user" }}}
    }
  }

  async loginUser(password: string, usernameOrEmail: string) {
    const firestore = this.adminService.getFirestore();

    try {
      const userUsername = await firestore.collection('users').where('username', '==', usernameOrEmail).get()
      const userEmail = await firestore.collection('users').where('email', '==', usernameOrEmail).get() 

      const users = [...userUsername.docs, ...userEmail.docs]

      if(users.length === 0)
        return { error: { message: "Incorrect email or username" } }

      const user = users[0]

      const userData = user.data()
      const userId = user.id

      const comparePassword = await bcrypt.compare(password, userData.password)

      if(comparePassword){
         const token = await this.jwtService.signAsync({
          id: userId,
          username: userData.username,
          password: userData.password,
          email: userData.email,
          state: userData.state
        })

        return { data: {success: { message: "Successfully logged", token}, error: {message: ''}}}
      } else
        return { data: { success: {message: ''}, error: { message: "Incorrect password try again" }}}
        
    } catch (error) {
      return { data: { success: {message: ''}, error: { message: `An error occurred while logging the user ${error}` }}}
    }
  }

  async signUpWithGoogle(data: User){
    const firestore = this.adminService.getFirestore();

    try{
      const username = await firestore.collection('users').where('username', '==', data.username).get()
      if(!username.empty)
        return { data: { success: {message: ''}, error: { message: "This username is already in use" }}}

      const email = await firestore.collection('users').where('email', '==', data.email).get()
      if(!email.empty)
        return { data: { success: {message: ''}, error: { message: "This email is already in use" }}}

      const passwordHash = await bcrypt.hash(`${data.username + data.email}`, 10)
      const userData: User = {
        username: data.username,
        email: data.email,
        password: passwordHash.split("").reverse().join(""),
        avatarImage: data.avatarImage,
        phoneNumber: data.phoneNumber,
        name: data.name,
        age: data.age,
        state: data.state,
        dateOfRegister: new Date(Date.now())
      }
      const docRef = await firestore.collection('users').add(userData);
      
      if(docRef.id)
        return { data: {success: { message: "Successfully registered" }, error: {message: ''}}}
      else
        return { data: {success: {message: ''}, error: { message: "Something went wrong" }}}
    } catch (error){
      return { data: {success: {message: ''}, error: { message: "An error occurred while registering the user" }}}
    }
    
  }

  async signInWithGoogle(username: string, email: string){
    const firestore = this.adminService.getFirestore();

    try{
      const userUsername = await firestore.collection('users').where('username', '==', username).get()
      const userEmail = await firestore.collection('users').where('email', '==', email).get() 

      const users = [...userUsername.docs, ...userEmail.docs]

      if(users.length === 0)
        return { data: { success: {message: ''}, error: { message: "Incorrect email or username" }}}

      const user = users[0]

      const userData = user.data()
      const userId = user.id

      const comparePassword = await bcrypt.compare(`${username + email}`, userData.password.split("").reverse().join(""))

      if(comparePassword){
        
         const token = await this.jwtService.signAsync({
          id: userId,
          username: userData.username,
          password: userData.password,
          email: userData.email,
          state: userData.state
        })

        return { data: {success: { message: "Successfully logged", token}, error: {message: ''}}}
      } else
        return { data: { success: {message: ''}, error: { message: "Incorrect password try again" }}}
        
    } catch (error) {
      return { data: { success: {message: ''}, error: { message: `An error occurred while logging the user ${error}` }}}
    }
    
  }

  async getCurrent(user: any){    
    const firestore = this.adminService.getFirestore()
    try {
      const userCurrent = await firestore.collection('users').doc(user.id).get()
      if(!userCurrent.data())
        return { data: { success: { currentUserData: null }, error: { message: 'User not found' }}}
      else{
        const { password, ...rest } = userCurrent.data()

        return { data: { success: { currentUserData: rest }, error: { message: '' }}}
      }
    } catch (error) {
      return { data: { success: { currentUserData: null }, error: { message: error } } }
    }
  }
}
