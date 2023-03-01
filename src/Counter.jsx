import React,{useEffect, useState} from "react";

const Counter=()=>{

    const [number,setNumber]=useState(0);
    const[text,setText]=useState('hello')
    //useEffect(callback,dependency array)

    useEffect(()=>{
        console.log('Call from global console');
        setText(Math.random());
    },[])
    
    return (<div>
        <div>{number}</div>
        <div>New app</div>
        <div>{text} </div>
        <button onClick={()=>setNumber(Math.random())}>Update number</button>
        <button onClick={()=>setText(Math.random())}>Update text</button>
    </div>);
}

export default Counter;
