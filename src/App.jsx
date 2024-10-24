import { Outlet } from "react-router-dom"
import Side from "./components/Sidebar/Side"

function App() {


  return (
    <>
     <Side/>
     <Outlet/>
    </>
  )
}

export default App

