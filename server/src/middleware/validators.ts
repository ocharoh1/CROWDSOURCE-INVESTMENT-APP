
// validating inputs

import { emailRegex } from "../utils/emailValidation"

//validate registration inputs
const validateUserInputs =(name:string, email:string, password:string)=>{
    //check if all fields are empty
    if(!name || !email || !password){

        return "Please fill all fields"
     }

     //check if password is correct
     if(password.length < 8){
        return "Password must be at least 8 characters long"
     }

     //check if email is correct
     if (!email.match(emailRegex)){
        return "Enter a valid email"
     }

     return null

}

//login validation
const validateLoginInputs =(email:string, password:string)=>{
    //check if all fields are empty
    if(!email || !password){
        return "Please fill all fields"
    }

      //check if password is correct
      if(password.length < 8){
        return "Password must be at least 8 characters long"
     }

     //check if email is correct
     if (!email.match(emailRegex)){
        return "Enter a valid email"
     }

     return null

}

//validate crete idea inputs
const validateIdeaInputs =(title:string, description:string, category:string, estimatedReturn:string)=>{
    //check if all fields are empty
    if(!title || !description || !category || !estimatedReturn){
        return "Please fill all fields"
    }

    return null
}

export {validateUserInputs, validateLoginInputs ,validateIdeaInputs}
