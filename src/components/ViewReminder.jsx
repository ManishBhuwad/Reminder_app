import React, { useState } from 'react'
import { ImPencil2 } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { deleteReminder, setFlag, updateReminder } from '../reducers/ReminderSlice';
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { IoIosSave } from "react-icons/io";

function ViewReminder({rem}) {
    const dispatch = useDispatch()

    const[description, setDescription] = useState(rem.description)
    const[sms, setSms] = useState(rem.sms)
    const[email, setEmail] = useState(rem.email)
    const[contact, setContact] = useState(rem.contact)
    const[date, setDate] = useState(rem.date)
    const [isEditable, setIsEditable] = useState(false);

    console.log(rem)



    const handleDelete = (e)=>{
        dispatch(deleteReminder(rem.id))
        toast.success("Reminder Deleted",{
            autoClose: 2000,
        })
        
    }

    const handleFlag = (e)=>{
        console.log(rem.id)

       

        dispatch(setFlag({id:rem.id, flag:!rem.flag}));
        if(rem.flag){
            toast.success("Reminder Disabled",{
                autoClose: 1000,
            })
        }else{
            toast.success("Reminder Enabled",{
                autoClose: 1000,
            })
        }
    }


    const editHandler = ()=>{
        
        const obj = {
            id:rem.id,
            description:description,
            email: email,
            sms: sms,
            date: date,
            contact:contact,
            flag: rem.flag,
            subject:rem.subject
        }

        dispatch(updateReminder({id:rem.id, values:obj}))
        setIsEditable(false)
        toast.success("Reminder Updated Successfully",{
            autoClose: 2000,
        })
    }

  return (
    <div className='w-full sm:w-11/12 bg-gray-200 mx-auto rounded-md overflow-hidden mb-10'>
        <div className=" text-white w-full p-2">
            <div className='w-full flex justify-between'>
                <p className='p-1 text-sm sm:p-2 rounded-b-md  sm:text-lg text-white bg-green-600 w-fit'>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}
                className={`outline-none bg-transparent ${isEditable ? "outline border ": "border-transparent" }`} readOnly={!isEditable}/>
                </p>
                <div>
                <button onClick={handleDelete}
                className='w-fit p-1 sm:p-2  rounded-md text-white bg-red-500 text-lg sm:text-2xl'><MdDelete /></button>
                </div>
            </div>
            
            <div className='w-full text-sm sm:text-xl mt-2 font-thin text-black/80'><span className='text-black/50 text-lg sm:text-xl'>Description</span><br />
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}
                className={`w-full outline-none bg-transparent ${isEditable ? "outline border ": "border-transparent" }`} readOnly={!isEditable}/>
            </div>
            <div className='w-full text-sm sm:text-xl mt-2 font-thin text-black/80'>
            <span className='text-black/50 text-lg sm:text-xl'>Message</span><br />
            <input type="text" value={sms} onChange={(e)=>setSms(e.target.value)}
                className={`w-full outline-none bg-transparent ${isEditable ? "outline border ": "border-transparent" }`} readOnly={!isEditable}/>
            </div>
           
            
        </div>
        <div className='w-full p-2 mt-4 sm:mt-10 flex flex-col sm:flex sm:flex-row justify-between '>
            <div className='w-full sm:w-6/12 flex gap-0 sm:gap-10  items-center justify-between'>
                <p className='text-black/50 '>   
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                className={`outline-none bg-transparent ${isEditable ? "outline border ": "border-transparent" }`} readOnly={!isEditable}/>
                </p>
                <p className='text-black/50'>
                <input type="phone" value={contact} onChange={(e)=>setContact(e.target.value)}
                className={`outline-none bg-transparent ${isEditable ? "outline border ": "border-transparent" }`} readOnly={!isEditable}/>
                </p>
            </div>
            <div className='w-full mt-2 sm:mt-0 sm:w-4/12 flex justify-between sm:justify-end sm:gap-10 '>
                <div>
                    <button onClick={ ()=> {
                        if(isEditable) {
                        editHandler();
                    } else 
                        setIsEditable((prev) => !prev)}
                    }
                    className='text-white text-2xl p-2 w-fit'>
                        {
                            isEditable ? <IoIosSave /> : <BsPencilSquare />

                        }
                   
                    </button>
                </div>
                <div>
                    <button onClick={handleFlag}
                    className='w-fit py-1 px-2 sm:p-2 bg-sky-500 rounded-sm text-white'>
                    {
                        rem.flag ? "Disable" : "Enable"
                    }
                    </button>
                </div>
            </div>
            
           
            
            
            
       
        </div>
    </div>
  )
}

export default ViewReminder
