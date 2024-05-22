import { Route, Routes } from "react-router-dom"
import { Auth } from "./pages/auth"
import { Home } from "./pages/home"
import { Navbar } from "./components/navbar"
import { Tree } from "./pages/tree"
import { Settings } from "./pages/settings"

function App() {

  return (
    <div>
      <Navbar/>
      <div style={{display: "flex"}} className="bg-[url('./images/logo.png')] ">


        <div className=" bg-blue-200 h-screen w-3/5 bg-opacity-80" style={{ flex: 5 }}>
          <Routes>
            <Route path="/auth"  element={<Auth />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/tree" element={<Tree/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
