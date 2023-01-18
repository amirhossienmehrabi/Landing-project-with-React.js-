export const validate = (data) =>{
    const errors = {}
    if(!data.name.trim()){
        errors.name ="Enter your name"
    }else if(data.name.length <= 4){
        errors.name = "Your name must be more than 4 character"
    }else{
        delete errors.name
    }
    if(!data.email){
        errors.email ="Enter your email"
    }else if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(data.email)){
        errors.email = "Enter valid email"
    }else{
        delete errors.email
    }
    if(!data.password){
        errors.password = "Enetr Your password"
    }else if(data.password.length <=6){
        errors.password = "Your password must be more than 6 character"
    }
    else{ delete errors.password}
    if(!data.confirmPassword){
        errors.confirmPassword = "Confirm password"
    }else if(data.confirmPassword !== data.password){
        errors.confirmPassword = "Incorrect Password"
    }else{
        delete errors.confirmPassword
    }
    if(!data.ischecked){
        errors.ischecked = "Accept our policy"
    }else{
        delete errors.ischecked
    }
    return errors;
}