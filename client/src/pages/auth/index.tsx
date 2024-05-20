import {Tabs, Tab,} from "@nextui-org/react";
import { Login } from "../../components/login";
import { SignUp } from "../../components/sign-up";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Auth: React.FC = () => {
  const [ selected, setSelected ] = useState('login')
  const navigate = useNavigate()
  
  return (
    <div className="w-1/2 mx-10 pt-10">
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


