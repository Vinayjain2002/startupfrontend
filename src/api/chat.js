import {toast} from 'react-toastify'
import dotenv from 'dotenv'
dotenv.config();


export const accessChat= async(body)=>{
    try{
        const token= localStorage.getItem('userToken');
        // making call to banked to acess the chat
        let data;
        return data;
    }
    catch(err){
        console.log('Error in accessing chat api')
    }
}

export const fetchAllChat= async(body)=>{
    try{

    }
    catch(err){

    }
}

