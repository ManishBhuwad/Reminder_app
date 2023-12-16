import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate()
    const[username, setUsername] = useState();
    const[pwd, setPwd] = useState();

    const handleLogin = (e)=>{
        e.preventDefault();
    
        if(username!="" && pwd !=""){
            if(username=="designElementary" && pwd =="12345678"){
                toast.success("Login Successful",{
                    position: "top-center",
                    autoClose: 2000,
                })
                navigate("/home")
            }else{
                toast.error("Login failed",{
                    position: "top-center",
                    autoClose: 2000,
                })
            }


        }else{
            toast.error("fill all fields")
        }
    }


  return (
    <div className='w-full h-screen pt-28'>
        <div className='w-10/12 sm:w-4/12 mx-auto border border-black h-96'>
            <form action="" onSubmit={handleLogin}
            className='w-full h-96 flex flex-col items-center mt-10'>
                <h3 className='text-2xl mb-2'>Login</h3>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}
                placeholder='Username'
                className='w-8/12 p-2 border border-black rounded-md my-4'/>
                <input type="text" value={pwd} onChange={(e)=>setPwd(e.target.value)}
                placeholder='Password'
                className=' sm:w-8/12 p-2 border border-black rounded-md my-4'/>
                <button type='submit'
                className='w-8/12 p-2 bg-green-600 text-white rounded-md mt-4'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login