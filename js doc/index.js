let panel =document.querySelector("#flip")
panel.addEventListener("mouseenter" ,myfun)

function myfun(){
    document.querySelector(".panel").style.display = 'block'
}

let btn2 = document.querySelector('.panel')
btn2.addEventListener('mouseleave', clickme)

function clickme() {
document.querySelector(".panel").style.display = 'none'}


