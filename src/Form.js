import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Spinner from './Spinner.js';

export default function Form() {
    const [loading,setLoading]=useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => { 
        try {
            setLoading(true);
            loading && <Spinner />
            let response = await fetch("http://localhost:3005/generated", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            let result = await response.json();
            
            console.log(data, result);
            setLoading(false);
            if (result.redirectUrl) {
                window.location.href = result.redirectUrl; // Redirect to the new URL
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return (

        <div>
            <div class="row" style={{ marginTop: "100px" }}>
                <form class="col s12" onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                            <div class="input-field col s12">
                                <input id="first_name" type="text" class="validate" {...register("firstName", { required: true })}/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                        
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" {...register("password", { required: true })}/>
                            <label htmlFor="password">Password</label>
                        </div>
                    <div class="row">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                    </div>
                    
                    </div>
                    </form>

            </div>
        </div>
    )
}
