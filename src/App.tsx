import {
  ClerkProvider,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import Courses from "./pages/courses";
import Course from "./pages/course";
import { useEffect } from "react";
import axios from "axios"
import useCourseStore from "../hooks/store"
 

// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
 
const clerkPubKey = "pk_test_bWVldC10cmVlZnJvZy0xNC5jbGVyay5hY2NvdW50cy5kZXYk";
 
 
 
function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  const {setCourses}=useCourseStore()

  useEffect(() => {
    const getCourses = ()=>{
      axios.get("https://the-flow.studio/demo/lms/api/home-courses").then((response)=>{
        setCourses(response.data)
        console.log(response.data)
      })
    }
    return () => {
      getCourses()
    }
  }, [])
  
 
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/course/:course_id/:section_id/:video_id" element={
              <Course />
        } />
        <Route
          path="/sign-in/*"
          element={<div className="flex min-h-screen justify-center items-center"><SignIn signUpUrl="/sign-up" afterSignInUrl={"/"} routing="path" path="/sign-in" /></div>}
        />
        <Route
          path="/sign-up/*"
          element={<div className="flex min-h-screen justify-center items-center"><SignUp signInUrl="/sign-in" afterSignInUrl={"/"} routing="path" path="/sign-up" /></div>}
        />
        <Route
          path="/courses"
          element={
              <Courses />
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
 
function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}
 
export default App;