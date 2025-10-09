import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../validation-schema/contact-schema.js";
import { contactApiCall } from "../api/contact-api.js";
import  toast  from "react-hot-toast";
import { useState } from "react";
useState
export const useContact = () => {
    const[loading, setLoading] = useState(false);
    const {register, handleSubmit, formState : {errors} } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues :{
            name:"",
            address:"",
            phone:"+91",
            email:"",
            message:""
        }
    });
    const doSubmit =async(formData) => {
        console.log('data is',formData);
        try{
            setLoading(true);
            const response = await contactApiCall(formData);
            console.log('response is',response);
            if(response.statusText === 'OK'){
                toast.success("Message sent successfully 🎉");
            }
            else{
                toast.error("Failed to send message ❌");
            }
        }
        catch(error){
            toast.error("Failed to send message ❌");
            console.log('Failed to make API call',error);
        }
        finally{
            setLoading(false);
        }
    
    }
    return {register,doSubmit,errors,handleSubmit,loading};
}