import {Tabs, Tab,} from "@nextui-org/react";
import { Login } from "../../components/login";
import { SignUp } from "../../components/sign-up";


export const Auth: React.FC = () => {

  return (
    <>

   
     <div className="w-5/5 mx-10 pt-10  " >
      <Tabs aria-label="Options" color="primary" >
        <Tab key="login" title="Login" className="w-1/2"  >
          <Login/>
        </Tab>
        <Tab key="register" title="Sign up" className="w-1/2">
          <SignUp/>
        </Tab>
   
      </Tabs>
    </div>  
    
    </>
  )
}


