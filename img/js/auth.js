function auth(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;  
    var formData = new FormData;
    
    formData.set("username",username);
    formData.set("password",password);
    console.log(username);
    var request = new XMLHttpRequest();

    request.onload=function(){
        var partxt =JSON.parse(this.responseText);
        console.log(partxt["response"]);
        if(partxt["response"] === "Valid_user")
        {
            window.location = "test.html"; 
        }
        else{
            alert(partxt["response"]);
        }
    }
    if(username.length>0 && password.length>0)
    {
        request.open('POST', "http://192.168.43.61:8000/imageAnalysis/verified_login");
       // request.open('POST', "http://192.168.1.8:8000/imageAnalysis/verified_login");
        request.send(formData);
    }
    else
    {
        alert("Fields Empty");
    }

}