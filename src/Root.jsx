import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Books from "./components/Books"
import Footer from "./components/Footer"

const Root = () => {
  return (
    <>
     <div className="max-w-[80%] mx-auto">
        <Navbar />
        <Banner />
        <Books />
        <Footer />
     </div>
    </>
  )
}

export default Root
