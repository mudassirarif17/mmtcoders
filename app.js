const bars = document.getElementById("bars");
const menu = document.getElementById("menu");

menu.style.top = "-100%";

bars.addEventListener("click" , function(){
    if(menu.style.top === "-100%"){
        menu.style.transition = "all 0.5s ease 0s"
        menu.style.top = "32vh";
    }else{
        menu.style.top = "-100%";
    }
})
