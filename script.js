
let container_icon_toggle = document.querySelector('.container_icon_toggle')
let link_nav = document.querySelector('.link_nav')
let container_icon_close =querySelector('.container_icon_close');

container_icon_toggle.addEventListener('click',()=>{
    link_nav.classList.add('.active')
})