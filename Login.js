document.getElementById("Sign").addEventListener("submit", function (e){e.preventDefault();
 const name=document.getElementById("name").value;
 const email=document.getElementById("email").value;
 const password=document.getElementById("password").value;
 if (name&& email && password){
    alert(`Welcome,${name}! You've signed up successfully`);
    window.location.href="index.html";
 } else{ alert ("Please fill out all fields.");
 }
});