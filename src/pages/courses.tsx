import Navbar from "../components/global/navbar"
import C from "../components/global/courses"
import { useClerk } from "@clerk/clerk-react"

function Courses() {
    const {user} = useClerk()
    
    if(!user){
      return(<div className="flex h-screen justify-center items-center">loading...</div>)
    }
  return (
    <div>
        <Navbar/>
        <C/>
    </div>
  )
}

export default Courses