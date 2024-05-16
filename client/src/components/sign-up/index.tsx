import React, { useState } from 'react'
import {Card, CardBody, Button, Link} from "@nextui-org/react";
import { Input } from '../input';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc';
import { Alert } from '../alert';
import { signInWithGoogle } from '../../config/firebase-config';

type Props = {
  setSelected: (value: string) => void
}

type AlertData = {
  data: string,
  type: string
}

interface SignUpForm  {
  username: string,
  email: string,
  password: string,
  rePassword: string,
}

export const SignUp: React.FC<Props> = ({setSelected}) => {
  const [alert, setAlert] = useState<AlertData | null>(null)

  const { handleSubmit, control, formState: { errors} } = useForm<SignUpForm>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      rePassword: '',
    }
  })

  const onSubmit = async (data: SignUpForm) => {
    try {
      await axios.post('http://localhost:3000/user/register', data, {headers: {
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

  const handleGoogleSignUp = async () => {
    try{
      const result = await signInWithGoogle()
      const user = result.user

      const userData = {
        username: user.displayName,
        password: '',
        email: user.email,
        avatarImage: user.photoURL,
        phoneNumber: user.phoneNumber || '',
        name: '',
        age: '',
        state: 'user',
      }

      const response = await axios.post('http://localhost:3000/user/sign-up-with-google', userData, {headers: {
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
          <Input control={control} name='username' label="Username" placeholder="Enter your name" type="text" />
          <Input control={control} name='email' label="Email" placeholder="Enter your email" type="email" />
          <Input control={control} name='password' label="Password" placeholder="Enter your password" type="password"/>
          <Input control={control} name='rePassword' label="Password" placeholder="Enter repeat your password" type="password"/>
          <p className='self-center text-zinc-600'>Do you already have an account? <Link className='cursor-pointer' color='primary' onPress={() => setSelected('login')}>Login</Link></p>
          <Button fullWidth color="primary" type='submit'>Sign up</Button>
          <Button fullWidth variant='ghost' color='primary' startContent={<FcGoogle className='text-2xl'/>} onClick={handleGoogleSignUp}>Sign up with Google</Button>
        </form>
        </CardBody>
      </Card>
      {alert && (
        <Alert type={alert.type} data={alert.data} setAlert={() => setAlert(null)}/>
      )}
    </>
  )
}
