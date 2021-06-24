import { createSlice} from "@reduxjs/toolkit";

export const timeSlice=createSlice({
    name:'countdown_timer',
    initialState: {
        time: 10,
      },
    reducers:{
        setTime:(state,action)=>{
            state.time=action.payload.time
        }
    }
})

export const {setTime}=timeSlice.actions;
// export const selector__timer=(state)=>state.timer;
export default timeSlice.reducer;