import React, { useState } from 'react'
import './Quiz.css'
import { questions} from '../QUESTION/question'
import Timer from './Timer'
import { useDispatch, useSelector } from 'react-redux'
import {setTime} from './timerSlice'
import StopWatch from './ICON/StopWatch'

function Quiz(){

    const dispatch=useDispatch();
    const time = useSelector((state) => state.timer.time)
    
    const[currQuesion,setCurrQuestion]=useState(0)
    const[showScore,setShowScore]=useState(false)
    const[score,SetScore]=useState(0)

    function handleAnswerButtonClick(isCorrect){
        if(isCorrect===true){
            SetScore(score+1)
        }
        const nextQuestion=currQuesion+1
        if(currQuesion < questions.length-1){
         setCurrQuestion(nextQuestion)
        }
        else{
            setShowScore(true)
        }
         dispatch(
            setTime({time:10})
         )
    }

    return(
        <div className='quiz__container'>
         {showScore ? (<div className='scoreBoard'><h3>YOU SCORED: {score} / {questions.length}</h3></div>): 
            (
            <>
             <div className='quiz__container__header'>
                <StopWatch/> 
                <Timer/>
             </div>
             <div className='quiz__container__body'> 
                <img className={`${time===0?'quiz__image hide__image': 'quiz__image show__image'}`} src={questions[currQuesion].img} alt='IMAGE'/>
                <div className={`${time===0?'question__container':'hide__question'}`}>
                  <h4>{questions[currQuesion].question}</h4>        
                   {   
                    questions[currQuesion].answerOption.map(options=>(<button className='option__button' onClick={()=>handleAnswerButtonClick(options.isCorrect)}>{options.answer}</button>))
                   }
                </div>
             </div>
             </>
             )
         }
        </div>
    )
}

export default Quiz