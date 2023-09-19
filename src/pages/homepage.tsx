import Navbar from "../components/global/navbar"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate()
  return (
    <div className="text-gray-800">
        <Navbar/>
        <div className="container mx-auto h-[700px] grid grid-cols-2 items-center  pb-20 ">
            <div className="flex-1 space-y-4">
                <h1 className="text-4xl  font-bold py-4">Unlock Your Potential Embark on a Journey of Lifelong Learning.</h1>
                <Button onClick={()=>navigate("/courses")} size={"lg"} className="text-xl py-6">Start now</Button>
            </div>
            <img className="flex-1" src="https://articulate-heroes.s3.amazonaws.com/uploads/rte/axdnicjg_How-to-Choose-the-Best-Free-LMS-for-You.png" alt="" />
        </div>
    </div>
  )
}

export default Homepage