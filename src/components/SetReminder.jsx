import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setReminder } from '../reducers/ReminderSlice';
import { Link, useNavigate} from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { toast } from 'react-toastify';

function SetReminder() {
    const navigate= useNavigate()
    const dispatch = useDispatch()

    const[error, setError ]= useState([]);
    const[emailError, setEmailError ]= useState([]);
    const[values, setValues] = useState({
        id:"",
        date:"",
        subject:"",
        description:"",
        email:"",
        contact:"",
        sms:"",
        flag:true
    })


    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(values)
        setValues(values.id= Date.now().toString())
        setValues(values.flag=true);

        if(values.contact!="" && values.date!="" && values.description!="" && values.email!="" && values.sms!=""){
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(emailRegex.test(values.email)){
                setEmailError([])
                dispatch(setReminder({...values}))
    
                setValues({date:"", email:"", subject:"", description:"", contact:"", sms:"", id:""})
                // alert("remider set successfully")
                toast.success("Reminder set successfully",{
                    autoClose: 2000,
                })
               
            }else{
                emailError.push("email is in valid")
            }

         
        }else{
            console.log("fill all the field")
            error.push("fill all the fields")
        }


        
    }


    useEffect(()=>{
        error.pop()
        emailError.pop()
    },[handleSubmit])



  return (
    <div className='w-full h-screen flex justify-center items-center p-2 sm:p-10 flex-none sm:justify-normal sm:items-start'>
    
        <div className='w-full px-2 text-xs sm:w-8/12 border rounded-md sm:px-10 py-10 mx-auto sm:text-xl shadow-md shadow-gray-500'>
            <form action="">
                <div className='w-full p-1 flex justify-between mt-2 items-center'>
                    <label htmlFor="select-date"
                    >Select Date</label>
                    <input type="date"
                    onChange={(e)=>setValues({...values,date:e.target.value})} value={values.date}
                    className='border border-black px-2 py-1 rounded-md'/>
                </div>
                <div className='w-full p-1 flex justify-between mt-2 items-center'>
                    <label htmlFor="select-date">Select Subject</label>
                <select name="subject" id="sub" className='w-6/12 sm:w-2/12 border border-gray-600 py-1 text-center'>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                    </select> 
                </div>
                <div className='w-full p-1 flex justify-between mt-2 items-center'>
                    <label htmlFor="desc">Add Description</label>
                    <textarea name="description" id="desc" cols="30" rows="2" onChange={(e)=>setValues({...values, description:e.target.value})} value={values.description}
                    placeholder='Add Description'
                    className='w-6/12 pl-1 sm:w-4/12 border border-gray-600'
                    >

                    </textarea>
                </div>
                <div className='w-full p-1 mt-2'>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(e)=>setValues({...values, email:e.target.value})} value={values.email}
                        placeholder='Email'
                        className='border border-gray-600 w-6/12 sm:w-4/12 py-1 pl-1'/>
                    </div>
                    
                    <div>
                    {
                        emailError.length > 0 ?<p className='w-full text-red-500 bg-white'>{emailError[0]}</p>: null
                    } 
                    </div>
                    
                </div>
                <div className='w-full p-1 flex justify-between mt-2 items-center '>
                    <label htmlFor="contact-no">Contact No</label>
                    <input type="phone" id="contact-no" onChange={(e)=>setValues({...values,contact:e.target.value})} value={values.contact}
                    placeholder='Mobile Number'
                    className=' border border-gray-600 w-6/12 sm:w-4/12 py-1 pl-1'/>
                </div>
                <div className='w-full p-1 flex justify-between mt-2 items-center'>
                    <label htmlFor="sms">SMS</label>
                    <input type="text" id='sms' onChange={(e)=>setValues({...values, sms:e.target.value})} value={values.sms}
                    placeholder='Write Message'
                    className='border border-gray-600 w-6/12 sm:w-4/12 py-1 pl-1'/>
                </div>
                <div className='w-full mt-2'>
                {
                    error.length>0 ?<p className='w-full  text-red-600'>{error[0]}</p> : null
                }
            </div>
                <div  className='mt-10 w-full flex justify-center sm:mt-12'>
                    <button type='submit' onClick={handleSubmit}
                    className='w-4/12 bg-green-500 py-2 rounded-md text-white '>Confirm</button>
                </div>
            </form>
           
            <div className='w-full mt-10'>
                <Link>
                <button onClick={(e)=>navigate("/home")} className='p-1 text-2xl rounded-md text-extrabold'><RiArrowGoBackFill /></button>
                </Link>
            </div>
            
        </div>
    
    </div>
  )
}

export default SetReminder