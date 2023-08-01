import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDataToChecked, addDataToElement, removeDataFromChecked, removeDataFromElemet } from '../redux/slice/todoSlice';

const Entry = () => {
    const [data,setData] = useState("");
    const dispatch = useDispatch();

    function clickHandler(data){
        dispatch(addDataToElement(data));
        setData("");
    }

    function changeHandler(event,index){
        // event.preventDefault();
        if(event.target.checked === true){
            dispatch(addDataToChecked(index));
        }
        else{
            dispatch(removeDataFromChecked(index)); 
        }
    }

    function deleteHandler(index){
        dispatch(removeDataFromChecked(index)); 
        dispatch(removeDataFromElemet(index));
    }

    const elementData = useSelector((state)=>(state.todo.element));
    const checkData = useSelector((state)=>(state.todo.checked));

  return (
    <div>
        <input type='text' value={data} onChange={(event)=>{
            setData(event.target.value);
        }}/>
        <button onClick={()=>{clickHandler(data)}}>ADD</button>
        <ul>
        {
            elementData.map((event,index)=>(
                <li key={index}>
                    <input type='checkbox' 
                    checked={checkData.includes(index)}
                    onChange={(event)=>{changeHandler(event,index)}}></input>
                    <>
                    {event}
                    </>
                    {
                        checkData.includes(index) ?(<button
                            onClick={()=>{deleteHandler(index)}}
                            >Delete</button>):(<span></span>)  
                    }
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Entry