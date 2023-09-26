import { UserButton, useAuth } from '@clerk/clerk-react'
import { Button } from '../ui/button'
import { useNavigate } from "react-router-dom";
import { LogIn } from 'lucide-react';

function Navbar() {
    const auth = useAuth()
    const navigate = useNavigate()

  return (
    <div className='bg-white'>
        <div className='flex container mx-auto w-full justify-between py-5'>
            <a href='/'>
                <h1 className='text-3xl font-bold'>LMS</h1>
            </a>
            <div className='flex gap-8 items-center'>
            <ul className='flex gap-4'>
                <li className='text-lg font-semibold text-gray-600'><a href='/'>Home</a></li>
                <li className='text-lg font-semibold text-gray-600'><a href='/courses'>Courses</a></li>
                <li className='text-lg font-semibold text-gray-600'><a href='/courses'>About</a></li>
            </ul>
            {
                auth.isSignedIn ?
                    <UserButton afterSignOutUrl='/'/>
                    :
                    <Button className='flex gap-2' onClick={()=>navigate("/sign-in")}>Login <LogIn size={16}/></Button>
            }
            </div>
        </div>
    </div>
  )
}

export default Navbar