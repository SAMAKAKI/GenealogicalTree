import {Tabs, Tab,} from "@nextui-org/react";
import { Login } from "../../components/login";
import { SignUp } from "../../components/sign-up";
import { useState } from "react";


export const Auth: React.FC = () => {
  const [ selected, setSelected ] = useState('login')
  
  return ( 
    <div className="h-screen w-1/3 mx-auto mt-20">
      <Tabs aria-label="Options" color="primary" fullWidth size="md" selectedKey={selected} onSelectionChange={(key) => setSelected(key as string)}>
        <Tab key="login" title="Login">
          <Login setSelected={setSelected}/>
        </Tab>
        <Tab key="sign-up" title="Sign up">
          <SignUp setSelected={setSelected}/>
        </Tab>
      </Tabs>
    </div>
  )
}


