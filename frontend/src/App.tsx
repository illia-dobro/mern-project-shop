import { Outlet } from "react-router-dom"

import Footer from "./bundles/common/components/footer"
import Header from "./bundles/common/components/header"
import './index.css'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-grow"><Outlet/></main>
      <Footer/>
    </div>
  )
}

export default App
