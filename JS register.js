console.log("Hello World.", 43, 409.23, true, false, ["banana", 43, true]);

console.log(typeof("Hello World."), typeof (34234), typeof(["banana"]))

// string = "asd", "lmkzhxch", "234"
// number = 12345, 40.2 60.4
// boolean = true, false
// object = aray [], JSON {...}
 
let btnRegister = document.querySelector("btnRegister");
let btnUsername = document.querySelector("txtUsername");
let txtConfirmPassword = document.querySelector("txtConfirmPassword");
let txtAge = document.querySelector("txtAge");

btnRegister.onclick = function(){
    register(txtUsername.value,txtPassword.value, txtConfirmPassword.value, txtAge.value )
}

function register (username, password, confirmpassword, age){
    console.log(username, password, confirmPassword, age);
    //alert("Register button has been clicked.")
}