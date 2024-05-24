import React, { useState } from 'react'
import {Card, CardBody, Button, Link} from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { Input } from '../input'
import { FcGoogle } from 'react-icons/fc';
import { Alert } from '../alert';
import { signInWithGoogle as signInWithGoogleFirebase } from '../../config/firebase-config';
import { useLazyGetCurrentQuery, useLoginMutation, useSignInWithGoogleMutation } from '../../app/services/userApi';
import { AlertData, LoginType } from '../../types';
import { useNavigate } from 'react-router-dom';

type Props = {
  setSelected: (value: string) => void
}

export const Login: React.FC<Props> = ({setSelected}) => {
  const [alert, setAlert] = useState<AlertData | null>(null)
  const { handleSubmit, control, formState: { errors} } = useForm<LoginType>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      usernameOrEmail: '',
      password: '',
    }
  })
  const [login] = useLoginMutation()
  const [triggerCurrentUser] = useLazyGetCurrentQuery()
  const [signInWithGoogle] = useSignInWithGoogleMutation()
  const navigate = useNavigate()

  const onSubmit = async (data: LoginType) => {
    try {
      await login(data).unwrap().then((res) => {
        if(res.data.success.message){
          setAlert({
            data: res.data.success.message,
            type: 'success'
          })
          setTimeout(() => {
            navigate('/')
          }, 1500)
        }
        if(res.data.error.message)
          setAlert({
            data: res.data.error.message,
            type: 'error'
          })
      })
      await triggerCurrentUser().unwrap()
    } catch (error) {
      setAlert({
        data: 'Something went wrong',
        type: 'error'
      })
    }
  }

  const handleGoogleSignIn = async () => {
    try{
      const result = await signInWithGoogleFirebase()
      const user = result.user

      const userData = {
        username: user.displayName,
        email: user.email,
      }

      await signInWithGoogle(userData).unwrap().then((res) => {
        if(res.data.success.message){
          setAlert({
            data: res.data.success.message,
            type: 'success'
          })
          setTimeout(() => {
            navigate('/')
          }, 1500)
        }
        if(res.data.error.message)
          setAlert({
            data: res.data.error.message,
            type: 'error'
          })
      })
      await triggerCurrentUser().unwrap()
    } catch (error) {
      setAlert({
        data: 'Something went wrong',
        type: 'error'
      })
    }
  }

  return (
    <>
      <Card>
        <CardBody className='bg-blue-300'>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name='usernameOrEmail' label="Username or Email" placeholder="Enter your username or email" type="text" pattern={/^(?:[A-Z\d][A-Z\d_-]{5,}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i}/>
            <p className='text-sm'>Username should has: <br /> - min 5 letters</p>
            <Input control={control} name='password' label="Password" placeholder="Enter your password" type="password" minLength={8} pattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-.]).{8,}$/}/>
            <p className='text-sm'>Password should has:<br /> - min 8 letters,<br /> - one capital letter,<br /> - one special character</p>
            <p className='self-center text-zinc-600'>You don't have an account yet? <Link className='cursor-pointer' color='primary' onPress={() => setSelected('sign-up')}>Sign Up</Link></p>
            <Button fullWidth color="primary" type='submit'>Login</Button>
            <Button fullWidth variant='ghost' color='primary' startContent={<FcGoogle className='text-2xl'/>} onClick={handleGoogleSignIn}>Login with Google</Button>
          </form>          
        </CardBody>
      </Card> 
      {alert && (
        <Alert type={alert.type} data={alert.data} setAlert={() => setAlert(null)}/>
      )}
    </>
  )
}
