const topnav = document.getElementById('top-nav');
const menu = document.getElementById("menu");
const clos = document.getElementById("close");
var x = window.matchMedia("(min-width: 768px)")
if(x.matches){
    topnav.style.visibility = "visible";
}
function navbar(){

        if(topnav.style.visibility == "hidden"){
            topnav.style.visibility = "visible";
            menu.style.display = "none";
            clos.style.display = "block";
        } else{
            topnav.style.visibility = "hidden";
            menu.style.display = "block";
            clos.style.display = "none";
        }
} 

document.addEventListener('scroll', scheader)
const header = document.getElementById("header");

function scheader(){
    if(scrollY > 500){
        header.classList.add("onscroll")
        header.style.transition ="2s"
    }else{
        header.classList.remove("onscroll")
    }
}


