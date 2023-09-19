import React from "react"
import Navbar from "../components/global/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {BsPlay } from "react-icons/bs"
import {BiLockAlt,BiFullscreen ,BiLeftArrowAlt,BiRightArrowAlt } from "react-icons/bi"
import { Button } from "../components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../components/ui/alert-dialog"

function Course() {
    const [info,setInfo]=React.useState(true)
  return (
    <div className="mb-8">
      <Navbar></Navbar>
      <div className="container mx-auto grid grid-cols-7 pt-8 gap-10 text-gray-700">
        <div className="col-span-5">
            {
                info?
                <>
                        <img className="w-full rounded-xl" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"></img>
                        <h1 className="text-5xl font-bold my-4">Course design </h1>
                        <h3 className="text-xl font-semibold">what you going to learn</h3>
                        <ul className="list-disc ml-4 py-2">
                            <li>photoshop</li>
                            <li>design</li>
                            <li>illustrator</li>
                            <li>coloring</li>
                            <li>images</li>
                            <li>and more</li>
                        </ul>
                        <hr  className="max-w-2xl my-4"/>
                        <h3 className="text-xl font-semibold">description</h3>
                        <p className="py-2 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda officiis. Incidunt beatae perspiciatis, quis doloribus, corrupti veritatis perferendis, atque fugiat optio autem officia commodi labore nemo facilis velit animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda officiis. Incidunt beatae perspiciatis, quis doloribus, corrupti veritatis perferendis, atque fugiat optio autem officia commodi labore nemo facilis velit animi!</p>
                        <h3 className="text-xl font-semibold">some more stuff</h3>
                        <p className="py-2 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda officiis. Incidunt beatae perspiciatis, quis doloribus, corrupti veritatis perferendis, atque fugiat optio autem officia commodi labore nemo facilis velit animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda officiis. Incidunt beatae perspiciatis, quis doloribus, corrupti veritatis perferendis, atque fugiat optio autem officia commodi labore nemo facilis velit animi!</p>
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
                        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/Ib8UBwu3yGA?si=lND6T2S_xnVFQdxL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
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
                    <h1 className="text-xl">Course Title</h1>
                    <h3 className="text-md text-gray-500">Name of the teacher</h3>
                </div>
            </div>
            <div className="py-4 space-x-2">
                <Button>Buy now for 30$</Button>
                <Button variant={"outline"} onClick={()=>setInfo(true)}>learn more</Button>
            </div>
            <h3 className="mt-3 text-md ">5 videos ( 6 hours )</h3>
            <h2 className="mt-6 text-xl font-semibold ">Course sections</h2>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1" >
              <AccordionTrigger>introduction</AccordionTrigger>
              <AccordionContent>
                <div onClick={()=>setInfo(false)} className="flex gap-2 items-center hover:bg-gray-50 p-1 rounded-lg bg-transparent duration-150 cursor-pointer">
                    <div className="w-8 h-8 bg-green-100 border border-green-200 rounded-md flex justify-center items-center text-xl text-green-600"><BsPlay/> </div>
                    <span className="text-md">the video title here</span>
                </div>
                {
                    new Array(8).fill("").map(()=>(
                         <AlertDialog>
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
                }
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>photoshop</AccordionTrigger>
              <AccordionContent>
                {
                    new Array(8).fill("").map(()=>(
                        <div className="flex gap-2 items-center hover:bg-gray-50 p-1 rounded-lg bg-transparent duration-150 cursor-pointer">
                            <div className="w-8 h-8 bg-gray-200 rounded-md flex justify-center items-center text-xl text-gray-500"><BiLockAlt/> </div>
                            <span className="text-md">the video title here</span>
                        </div>
                    ))
                }
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>illustrator</AccordionTrigger>
              <AccordionContent>
                {
                    new Array(8).fill("").map(()=>(
                        <div className="flex gap-2 items-center hover:bg-gray-50 p-1 rounded-lg bg-transparent duration-150 cursor-pointer">
                            <div className="w-8 h-8 bg-gray-200 rounded-md flex justify-center items-center text-xl text-gray-500"><BiLockAlt/> </div>
                            <span className="text-md">the video title here</span>
                        </div>
                    ))
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Course;
