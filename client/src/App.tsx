import { Route, Routes } from "react-router-dom"
import { Settings, Home, Tree, Auth, About, ContactUs, ErrorPage } from "./pages"
import { Footer, Navbar, Profile } from "./components"

function App() {

  return (
    <div className="">
      <Navbar/>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth"  element={<Auth />}/>
          <Route path="/tree" element={<Tree/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/settings" element={<Settings/>}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
