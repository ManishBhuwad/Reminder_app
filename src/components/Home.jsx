import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ViewReminder from './ViewReminder'
function Home() {
    const navigate = useNavigate()
    const rem=useSelector((state)=>(state.rem))

    console.log(rem , "reminder")
  return (
    <div className='w-full min-h-screen px-2 py-10  sm:p-10 flex flex-col'>
        <div className='w-full'>
            <Link className='w-full flex justify-end'>
                <button onClick={(e)=>navigate("/")}
                className='w-fit p-1 sm:p-2 bg-red-500 text-white rounded-md'>Logout</button>
            </Link>
        </div>
        <div className='w-6/12 sm:w-3/12 mx-auto p-2 bg-sky-500 text-gray-50 sm:text-2xl text-center rounded-md'> 
            <Link>
                <button onClick={(e)=>navigate("/set-rem")}>Set New Reminder</button>
            </Link>
        </div>
        
        <div className='w-full sm:w-8/12 mx-auto border-t rounded-t-md  overflow-hidden mt-20 '>
            <div className='w-full'>
                <h3 className='w-full bg-violet-100 px-1 py-2 text-lg sm:text-2xl text-center text-black/80'>
                    All reminders
                </h3>
                <div className='w-full min-h-64 bg-slate-200 py-10'>
                {
                    rem.length>0 ? rem.map((item, index)=>(
                        <div key={index}>
                            <ViewReminder rem={item}/>
                        </div>
                    )): <p className='text-center'>No Items Yet</p>
                }
                </div>
                
            </div>
        </div>
    </div>
  )
}




export default Home