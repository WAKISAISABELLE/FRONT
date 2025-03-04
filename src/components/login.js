import React from "react";

import {useState} from "react"


export default function Login(){
    const[email, setEmail]  = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("")
    const[isLoading, setIsLoading]= useState(false)
    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try{
            await new Promise((resolve) => setTimeout(resolve, 1000))
            if (email.includes("admin")){
                router.push("/Dashboard/admin")
            } else if (email.includes("president")){
                router.push("/Dashboard/president")
            }else{
                router.push("/Dashboard/student")
            }
        }catch (err){
         setError('Invalid email or password. Please try again')
        }finally
         
        }
    };

    return(
        <div className = 'Login-container'>
            <h2> Login</h2>
            <form onSubmit ={handlelogin}>

            
        </div>


 );



