import Footer from "./bundles/common/components/footer"
import Header from "./bundles/common/components/header"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-grow"></main>
      <Footer/>
    </div>
  )
}

export default App
