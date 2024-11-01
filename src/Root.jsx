import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Books from "./components/Books"

const Root = () => {
  return (
    <>
     <div className="max-w-[80%] mx-auto">
        <Navbar />
        <Banner />
        <Books />
     </div>
    </>
  )
}

export default Root
