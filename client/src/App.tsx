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
        <div className=" bg-blue-200 h-screen w-1/5 bg-opacity-80" style={{ flex: 2.5}}>
          <div className="m-10 bg-white h-5/6 w-5/6  bg-logo ">
            <h2>your add xdd<p>or something else</p></h2>
          </div>
        </div>

        <div className=" bg-blue-200 h-screen w-3/5 bg-opacity-80" style={{ flex: 5 }}>
          <Routes>
            <Route path="/auth"  element={<Auth />} />
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
