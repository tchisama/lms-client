import { useEffect } from "react"
import Navbar from "../components/global/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {BsPlay } from "react-icons/bs"
import {BiFullscreen ,BiLeftArrowAlt,BiRightArrowAlt } from "react-icons/bi"
import { Button } from "../components/ui/button";
import useCourseStore from "../../hooks/store";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowRight, StarsIcon } from "lucide-react";

function Course() {
    const {course_id ,section_id, video_id} = useParams()
    const navigate = useNavigate()

    const {selectedCourse,setSelectedCourse}=useCourseStore();

    useEffect(()=>{
      const getCourse = ()=>{
        axios.get("https://the-flow.studio/demo/lms/api/course-"+course_id).then((response)=>{
          setSelectedCourse(response.data)
          console.log(response.data)
        }).catch((error)=>{
          console.log(error);
        })
      }

      return()=>{
        getCourse()
      }
    },[course_id])


  return (
    <div className="mb-8">
      <Navbar></Navbar>
      <div className="container mx-auto grid grid-cols-7 pt-8 gap-10 text-gray-700">
        <div className="col-span-5">
            {
                video_id=="info"?
                <>
                        <img className="w-full rounded-xl" src={"https://the-flow.studio/demo/lms/"+selectedCourse?.thumbnail}></img>
                        <h1 className="text-5xl font-bold my-4">{selectedCourse?.title}</h1>
                        <h3 className="text-xl font-semibold">{selectedCourse?.description}</h3>
                </>
                :
                <>
                       <div className="text-gray-500 font-medium">
                            <a href="/courses">Courses</a> / <a>design course</a> / <a>introduction</a>/ <a>first video</a>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold my-4">Course design </h1>
                            <Button size={"icon"} variant={"outline"}><BiFullscreen/></Button>
                        </div>
                        <iframe className="w-full aspect-video" src={selectedCourse?.sections[Number(section_id)].videos[Number(video_id)]?.url} title="YouTube video player" ></iframe>
                        <div className="flex gap-2 mt-4 w-full">
                            <Button variant={"outline"} className="flex gap-2"><BiLeftArrowAlt/> Previous</Button>
                            <Button variant={"outline"} className="flex gap-2">Next <BiRightArrowAlt/></Button>
                        </div>
                </>
            }
        </div>
        <div className="col-span-2">
            <div className="flex gap-2 items-center">
                <img className="w-12 h-12 rounded-lg" src="https://avatars.githubusercontent.com/u/134111504?s=200&v=4"></img>
                <div>
                    <h1 className="text-xl">{selectedCourse?.title}</h1>
                    <h3 className="text-md text-gray-500">Name of the teacher</h3>
                </div>
            </div>
            <div className="py-4 flex gap-2">
                <Button className="w-28 relative overflow-hidden group">
                  <span className="flex gap-2 w-28 absolute left-0 justify-center items-center group-hover:-left-28 duration-200">Buy now <StarsIcon size={17}/></span>
                  <span className="flex gap-2 w-28 absolute justify-center items-center -right-28  group-hover:right-0 duration-200">For 30$ <ArrowRight size={17}/></span>
                </Button>
                <Button variant={"outline"} onClick={()=>navigate("/course/"+course_id+"/0/info")}>learn more</Button>
            </div>
            <h2 className="mt-6 text-xl font-semibold ">Course sections</h2>



          <Accordion type="single" collapsible defaultValue="section-0">



            {
              selectedCourse?.sections.map((section,i)=>{
                return(
                    <AccordionItem key={i} value={"section-"+i} >
                      <AccordionTrigger>{section.title}</AccordionTrigger>
                      <AccordionContent>

                        {
                          section.videos.map((video,a)=>{
                            return(
                                <div key={a} onClick={()=>navigate("/course/"+course_id+"/"+i+"/"+a)} className="flex gap-2 items-center hover:bg-gray-50 p-1 rounded-lg bg-transparent duration-150 cursor-pointer">
                                    <div className="w-8 h-8 bg-green-100 border border-green-200 rounded-md flex justify-center items-center text-xl text-green-600"><BsPlay/> </div>
                                    <span className="text-md">{video.title}</span>
                                </div>
                            )
                          })
                        }

                      </AccordionContent>
                    </AccordionItem>
                )
              })
            }

            

          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Course;





                /* {
                    new Array(8).fill("").map((a,b)=>(
                         <AlertDialog key={b}>
                         <AlertDialogTrigger asChild>
                                <div className="flex gap-2 items-center hover:bg-gray-50 p-1 rounded-lg bg-transparent duration-150 cursor-pointer">
                                    <div className="w-8 h-8 bg-gray-200 rounded-md flex justify-center items-center text-xl text-gray-500"><BiLockAlt/> </div>
                                    <span className="text-md">the video title here</span>
                                </div>
                         </AlertDialogTrigger>
                         <AlertDialogContent>
                           <AlertDialogHeader>
                             <AlertDialogTitle className="flex gap-2 items-center"><BiLockAlt/>Lesson unavailable</AlertDialogTitle>
                             <AlertDialogDescription>
                             You can unlock full access to all the courses by making a purchase.
                             </AlertDialogDescription>
                           </AlertDialogHeader>
                           <AlertDialogFooter>
                             <AlertDialogCancel>Cancel</AlertDialogCancel>
                             <AlertDialogAction>Buy now</AlertDialogAction>
                           </AlertDialogFooter>
                         </AlertDialogContent>
                       </AlertDialog>
                    ))
                } */