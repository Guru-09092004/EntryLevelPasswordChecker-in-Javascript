const pass = (password) =>{
    if(password === "SecretKey" && password.length > 5){
        return `Your password : ${password} is Correct`
    }
    else{
        console.log(`password Denide`)
    }
}

let secretKey = "SecretKey";
console.log(pass(secretKey));



