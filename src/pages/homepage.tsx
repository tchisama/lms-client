import { ArrowRight } from "lucide-react";
import Navbar from "../components/global/navbar"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

function Homepage() {
    const navigate = useNavigate()
    const {user}=useClerk()
    if(!user){
      return(<div className="flex h-screen justify-center items-center">loading...</div>)
    }
  return (
    <div className="text-gray-800">
        <Navbar/>
        <div className="container mx-auto h-[700px] grid grid-cols-2 items-center  pb-20 ">
            <div className="flex-1 space-y-4">
                <h1 className="text-4xl  font-bold py-4">Unlock Your Potential Embark on a Journey of Lifelong Learning.</h1>
                <Button onClick={()=>navigate("/courses")} className="text-xl px-6 py-6 flex gap-3 group items-center">Start now<ArrowRight className="group-hover:translate-x-2 duration-200 "/></Button>
            </div>
            <img className="flex-1" src="https://articulate-heroes.s3.amazonaws.com/uploads/rte/axdnicjg_How-to-Choose-the-Best-Free-LMS-for-You.png" alt="" />
        </div>
    </div>
  )
}

export default Homepage