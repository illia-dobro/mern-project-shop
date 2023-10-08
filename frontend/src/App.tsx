import { Outlet } from "react-router-dom"

import Container from "./bundles/common/components/container"
import Footer from "./bundles/common/components/footer"
import Header from "./bundles/common/components/header"

import './index.css'



function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-grow"><Container><Outlet/></Container></main>
      <Footer/>
    </div>
  )
}

export default App
