"use strict";

//--------burger menu------------
$(".hidden-menu").addEventListener("click", ()=>{
    $(".modalka").style.display="block"
})
$(".close").addEventListener("click", ()=>{
    $(".modalka").style.display="none"
})
//--------burger menu------------

// alert(username)

function some() {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('token');


    $(".userLogin").innerHTML = (`${username}`)
    
    if (!password) {
        location.replace('pages/login.html')
    }
}
some()

$('.log_oute').addEventListener('click', ()=>{
    localStorage.clear();
    location.reload()
})
