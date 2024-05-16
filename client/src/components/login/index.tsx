import React, { useState } from 'react'
import {Card, CardBody, Button, Link} from "@nextui-org/react";
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { Input } from '../input'
import { FcGoogle } from 'react-icons/fc';
import { Alert } from '../alert';
import { useNavigate } from 'react-router-dom';
import { useGuardAuth } from '../../providers/GuardAuthProvider';

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
  const { login, isAuthenticated } = useGuardAuth()
  const navigate = useNavigate()

  if(isAuthenticated)
    navigate('/home')

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
      await axios.post('http://localhost:3000/user/login', data).then((res) => {
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

  return (
    <>
      <Card>
        <CardBody className='bg-blue-300'>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name='usernameOrEmail' label="Username or Email" placeholder="Enter your username or email" type="text" />
            <Input control={control} name='password' label="Password" placeholder="Enter your password" type="password" />
            <p className='self-center text-zinc-600'>You don't have an account yet? <Link className='cursor-pointer' color='primary' onPress={() => setSelected('sign-up')}>Sign Up</Link></p>
            <Button fullWidth color="primary" type='submit'>Login</Button>
            <Button fullWidth variant='ghost' color='primary' startContent={<FcGoogle className='text-2xl'/>}>Login with Google</Button>
          </form>          
        </CardBody>
      </Card> 
      {alert && (
        <Alert type={alert.type} data={alert.data} setAlert={() => setAlert(null)}/>
      )}
    </>
  )
}
