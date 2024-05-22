import {Tabs, Tab,} from "@nextui-org/react";
import { Login } from "../../components/login";
import { SignUp } from "../../components/sign-up";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGuardAuth } from "../../providers/guardAuth";


export const Auth: React.FC = () => {
  const [ selected, setSelected ] = useState('login')
  const navigate = useNavigate()
  const { isAuthentication } = useGuardAuth()

  useEffect(() => {
    if(isAuthentication)
      navigate('/home')
  })
  
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


