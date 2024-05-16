import React, { useState } from 'react'
import {Card, CardBody, Button, Link} from "@nextui-org/react";
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { Input } from '../input'
import { FcGoogle } from 'react-icons/fc';
import { Alert } from '../alert';
import { useGuardAuth } from '../../providers/GuardAuthProvider';
import { signInWithGoogle } from '../../config/firebase-config';

type Props = {
  setSelected: (value: string) => void
}

type AlertData = {
  data: string,
  type: string
}

type Login = {
  usernameOrEmail: string,
  password: string,
}

export const Login: React.FC<Props> = ({setSelected}) => {
  const { login } = useGuardAuth()

  const [alert, setAlert] = useState<AlertData | null>(null)
  const { handleSubmit, control, formState: { errors} } = useForm<Login>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      usernameOrEmail: '',
      password: '',
    }
  })

  const onSubmit = async (data: Login) => {
    try {
      await axios.post('http://localhost:3000/user/login', data, {headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        if(res.data?.error)
          setAlert({
            data: res.data?.error?.message,
            type: 'error'
          })
        if(res.data?.success)
          setAlert({
            data: res.data?.success?.message,
            type: 'success'
          })
          login(res.data?.success?.token)
      }).catch((err) => {
        setAlert({
          data: err.message,
          type: 'error'
        })
      })
    } catch (error) {
      setAlert({
        data: 'Something went wrong',
        type: 'error'
      })
    }
  }

  const handleGoogleSignIn = async () => {
    try{
      const result = await signInWithGoogle()
      const user = result.user

      const userData = {
        username: user.displayName,
        email: user.email,
      }

      const response = await axios.post('http://localhost:3000/user/sign-in-with-google', userData, {headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        if(res.data?.error)
          setAlert({
            data: res.data?.error?.message,
            type: 'error'
          })
        if(res.data?.success)
          setAlert({
            data: res.data?.success?.message,
            type: 'success'
          })
          login(res.data?.success?.token)
      }).catch((err) => {
        setAlert({
          data: err.message,
          type: 'error'
        })
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Card>
        <CardBody className='bg-blue-300'>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name='usernameOrEmail' label="Username or Email" placeholder="Enter your username or email" type="text" />
            <Input control={control} name='password' label="Password" placeholder="Enter your password" type="password" />
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
