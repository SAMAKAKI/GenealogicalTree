import React from 'react'
import {Card, CardBody,Input,Button,} from "@nextui-org/react";
export const SignUp: React.FC = () => {
  return (

    
    <Card>
        <CardBody className='bg-blue-300'>
        <form className="flex flex-col gap-4  ">
                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input isRequired label="Password" placeholder="Enter your password" type="password"/>
                <Input isRequired label="Password" placeholder="repeat your password" type="password"/>
               
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up with Google
                  </Button>
                </div>
              </form>
      </CardBody>
    </Card>  
    
  )
}
