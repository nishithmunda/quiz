import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setTime} from './timerSlice'

const Timer = () => {
    const dispatch=useDispatch();
    const timer = useSelector((state) => state.timer.time)
    useEffect(() => {
    // exit early when we reach 0
    if (!timer){
       return 
    };
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      dispatch(
          setTime({time:timer - 1}));
    }, 1000);

    return () => clearInterval(intervalId);
    }, [timer]);

    return (
      <div>
        <h4 className='timer_font'>{timer}</h4>
      </div>
    );
  }

  export default Timer