function DisplayUsename(){
    let username = prompt("Enter your username");
    while(ValidateUsername(username) == false){
      username =  prompt("Enter a valid username");
    }
    if(username == null){
        return
    }
    
    let password = prompt("Enter your password")
    while(ValidatePassword(password) == false){
       password = prompt("Enter a valid password");
    }
    if(password == null){
        return
    }
    le
    console.log(username, password)
}
DisplayUsename();
alert("User Authenticated")


function ValidateUsername (username){
    if (username == null){
        return false;
    }
    if (username.length > 10){
        return false;
    }else{
        return true;
    }
}

function ValidatePassword(password){
    if(password == null){
        return false;
    }
    if(password.length < 6){
        return false;
    } else{
        return true;
    }
}