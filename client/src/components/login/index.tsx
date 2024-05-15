import React from 'react'
import {Card, CardBody,Button,Input,} from "@nextui-org/react";


export const Login: React.FC = () => {
  return (
    <Card>
        <CardBody className='bg-blue-300'>
        <form className="flex flex-col gap-4 ">
                <Input isRequired label="Email" placeholder="Enter your username / email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
               
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                  
                </div>
                <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary">
                    Login with Google
                  </Button>
                </div>
              </form>
                    
        </CardBody>
    </Card>  
  )
}
