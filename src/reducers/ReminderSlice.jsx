import { createSlice } from "@reduxjs/toolkit";



export const ReminderSlice = createSlice({
    name:'reminder',
    initialState:{
        rem:[]},
    reducers:{
        setReminder: (state, actions)=>{
            console.log(actions.payload)
            state.rem.push(actions.payload)
        },

        deleteReminder:(state, actions)=>{
            console.log(actions.payload, "this is delete")
            state.rem = state.rem.filter((item)=>(
                item.id!=actions.payload ? item : null
            ))
        },

        updateReminder: (state, action)=>{
            const{id, values} = action.payload
            console.log('this is values',values)
            state.rem = state.rem.filter((item)=>{
                if(item.id==id){
                    item==values
                }

                return item
                
            })
        },

        setFlag: (state, actions)=>{
            const{id, flag} = actions.payload
            

             state.rem = state.rem.filter((item)=>{
                if(item.id==id){
                    item.flag=flag
                    return item
                }else{
                    return item
                }
             })
        },

        

        }
})


export const {setReminder, deleteReminder,setFlag, updateReminder} = ReminderSlice.actions;
export default ReminderSlice.reducer; 