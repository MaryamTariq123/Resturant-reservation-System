let menue = document.getElementById("menue");
let tracks = document.getElementById("tracks");
let feedbacks = document.getElementById("feedbacks");
let homes = document.getElementById("homes");


homes.addEventListener("click", function(){
    homes.style.color="red";
    menue.style.color="white";
    tracks.style.color="white";
    feedbacks.style.color="white";
})


menue.addEventListener("click", function(){
    homes.style.color="white";
    menue.style.color="red";
    tracks.style.color="white";
    feedbacks.style.color="white";
})

tracks.addEventListener("click", function(){
    tracks.style.color="red";
    menue.style.color="white";
    homes.style.color="white";
    feedbacks.style.color="white";
})

feedbacks.addEventListener("click", function(){
    homes.style.color="white";
    menue.style.color="white";
    tracks.style.color="white";
    feedbacks.style.color="red";
})

let logBtn = document.getElementById("logBtn");
logBtn.addEventListener("click", function(){
    document.querySelector(".loginPage").style.display="block";
})

let logedBtn = document.getElementById("logedBtn");

logedBtn.addEventListener("click", function(){
    let email = document.getElementById("name");
    let password = document.getElementById("pass");

    if(email.value =="" || password.value==""){
        alert("Please Enter Email and Password");
    }
    else{
        alert("You Logged In");
        document.querySelector(".loginPage").style.display="none";
    }
    
})


    




