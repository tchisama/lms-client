import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { useNavigate } from "react-router-dom";

function Courses() {
    const navigate = useNavigate();
  return (
<div className='container mx-auto'>
    <h1 className='my-8 text-5xl font-bold'>Courses</h1>
    <div className='grid gap-4 grid-cols-3 '>
        <Card onClick={()=>navigate("/course")} className='overflow-hidden cursor-pointer'>
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg" alt="" />
                <CardHeader>
                    <CardTitle>Course Title</CardTitle>
                    <CardDescription>course Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nostrum illo </p>
                </CardContent>
        </Card>
        <Card  onClick={()=>navigate("/course")}  className='overflow-hidden cursor-pointer'>
                <img src="https://static.skillshare.com/uploads/video/thumbnails/7834fd84344914378bf2c5d660a0c01c/original" alt="" />
                <CardHeader>
                    <CardTitle>Course Title</CardTitle>
                    <CardDescription>course Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nostrum illo </p>
                </CardContent>
        </Card>
    </div>
</div>
  )
}

export default Courses