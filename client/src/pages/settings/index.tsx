import { Link, Outlet } from "react-router-dom"
import { Button } from "@nextui-org/react"

export const Settings: React.FC = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="container mx-auto flex items-start mt-20">
          <div className="flex flex-col justify-center items-center w-1/4">
            <Link to={'profile'} className="w-full"><Button color="primary" size="lg" variant="ghost" className="w-full text-xl">Profile</Button></Link>
          </div>
          <div className="w-3/4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
