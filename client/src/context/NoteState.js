import React, { useEffect, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState =(props)=>{

    const s1 = {
        "name" : "Abhishek",
        "age" : 20
    }


    

    const [state , setState] = useState(s1);
    const [proList , setProList] = useState([]);

    const [userDetails , setUserDetails] = useState({
        id : 0,
        email:"k",
        mobileNo : "",
        password : ""
    })

    const update = () =>{
        setTimeout(() => {
            setState({
                "name" : "Rahul",
                "age" : 30
            })
        }, 1000);
    }


    const loginAsUser = (userData) =>{
        setUserDetails(userData)      
        localStorage.setItem("userData", JSON.stringify(userData));  
}

    return(
        <NoteContext.Provider value={{state , update,loginAsUser,userDetails}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;