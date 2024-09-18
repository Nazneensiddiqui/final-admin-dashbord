document.getElementById("btn").addEventListener("click" , add)

function add (e){
    e.preventDefault();

    let  username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let  password = document.getElementById("password").value
    let conformpassword = document.getElementById("psw").value

    if(username === "" || email==="" || password ==="" || conformpassword=== "")
    {
        alert("all filed is mandatory");
        document.getElementById("username").focus();
        return;
    }

    if(password !== conformpassword)
    {
        alert("password doesnot match");
        document.getElementById("psw").focus();
        return; 
    }

    //set data to localstorge
    localStorage.setItem("usename",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    

    //redirect to login page
    window.location.href = "Dlogin.html"
    
}