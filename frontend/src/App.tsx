import Footer from "./bundles/common/components/footer"
import Header from "./bundles/common/components/header"
import HomeScreen from "./bundles/common/components/screens/home-screen"
import './index.css'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-grow"><HomeScreen/></main>
      <Footer/>
    </div>
  )
}

export default App
