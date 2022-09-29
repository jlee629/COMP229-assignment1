/* 

app.js, Jungyu Lee, 301236221, Sep 29 2022

*/



(function(){
    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);    

})();

// on Contact page, if submit button is clicked, the information will be shown as a pop up message, and the user will be redirected to home page.

let fname = document.getElementById('first-name');
let lname = document.getElementById('last-name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let message = document.getElementById('message');
let submit = document.getElementById('submit');

if(submit){
    submit.addEventListener('click', ()=>{
        alert("First Name: " + fname.value + '\n' + "Last Name: " + lname.value + '\n' + 
        "Email: "+email.value +'\n' + "Contact Number: " +number.value + '\n' + 
        "Message: "+message.value + '\nYour message has sent to me directly. \nI will redirect you to my Home page!');
        window.location.href = "/home";    
    });

}
