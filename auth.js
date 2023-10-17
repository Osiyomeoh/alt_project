const UsersDatabase = {
    "user1" : {
        firstName: "Chike",
        lastName: "Simon",
        email: "adaobi@gmail.com",
        accountAacivated: true,
        password: "adamypassword"
    },
    "user2" : {
        firstName: "Chike",
        lastName: "Simon",
        email: "adaobi@gmail.com",
        accountAacivated: true,
        password: "adamypassword"
    },
    "user3" : {
        firstName: "Chike",
        lastName: "Simon",
        email: "adaobi@gmail.com",
        accountAacivated: true,
        password: "adamypassword"
    },
    "user4" : {
        firstName: "Chike",
        lastName: "Simon",
        email: "adaobi@gmail.com",
        accountAacivated: true,
        password: "adamypassword"
    },
    "user5" : {
        firstName: "Chike",
        lastName: "Simon",
        email: "adaobi@gmail.com",
        accountAacivated: true,
        password: "adamypassword"
    },
    "user6" : {
        firstName: "Chike",
        lastName: "Simon",
        email: "adaobi@gmail.com",
        accountAacivated: true,
        password: "adamypassword"
    },
}
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
    let passwordConfirm = prompt("Confirm your password")
    while(passwordConfirm != password){
        passwordConfirm = prompt("Incorrect enter your password")
    }

    if(password == null){
        return
    }

    const user = UsersDatabase[username]
    if (user == undefined){
        alert("User not found!")
        return
    }
    alert(`
    User found with the following details:
    First Name: ${user.firstName}
    Last Name: ${user.lastName}
    Email:   ${user.email}
    Account Activated: ${user.accountAacivated}
    `)

    console.log(username, password, passwordConfirm)
}
DisplayUsename();
alert("User Authenticated")


function ValidateUsername (username){
    if (username == null){
        return true;
    }
    if (username.length > 10){
        return false;
    }else{
        return true;
    }
}

function ValidatePassword(password){
    if(password == null){
        return true;
    }
    if(password.length < 6){
        return false;
    } else{
        return true;
    }
}
