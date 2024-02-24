function formValidate(){

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var text = "";
    var error = document.getElementById("error");

    if (username.length < 7){
        text = "Please Enter UserName Valid"
        error.innerHTML = text;
        return false ;

    } else if (email.indexOf("@gmail.com")==-1 || email.length < 10){
        text = "Please Enter Email Valid"
        error.innerHTML = text;
        return false ;

    }else if (phone.length < 10 || isNaN(parseInt(phone))){
        text = "Please Enter Phone Valid";
        error.innerHTML = text;
        return false ;
        
    }else{
        alert("Done")
        return true ;
    }
}