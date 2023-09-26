import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { useNavigate } from "react-router-dom";
import useCourseStore from '../../../hooks/store';

function Courses() {
    const navigate = useNavigate();
    const {courses}=useCourseStore()
  return (
<div className='container mx-auto'>
    <h1 className='my-8 text-5xl font-bold'>Courses</h1>
    <div className='grid gap-4 grid-cols-3 '>
        {
            courses.map((course)=>{
                return(
                <Card key={course.id_course} onClick={()=>navigate("/course/"+course.id_course+"/0/info")}  className='overflow-hidden cursor-pointer'>
                        <img src={"https://the-flow.studio/demo/lms/"+course.thumbnail} alt="" />
                        <CardHeader>
                            <CardTitle>{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                        </CardHeader>
                </Card>
                )
            })


        }

    </div>
</div>
  )
}

export default Courses