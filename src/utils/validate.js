export const IsValidSignin=(email,password)=>{
    const isvalidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isvalidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    console.log("isvalidEmail",isvalidEmail,"isvalidPassword",)
    if(!isvalidEmail)
        return "Email is Invalid !."
    if(!isvalidPassword)
        return "Password is Invalid !."

    return null;
}

export const IsValidSignup=(email,password,name)=>{
    const isvalidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isvalidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);

    if(!isValidName)
        return "Name is Invalid !."
    if(!isvalidEmail)
        return "Email is Invalid !."
    if(!isvalidPassword)
        return "Password is Invalid !."
  

    return null;
}

