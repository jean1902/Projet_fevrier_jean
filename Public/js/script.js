
let container_icon_toggle = document.querySelector('.container_icon_toggle')
let link_nav = document.querySelector('.link_nav')
let container_icon_close =document.querySelector('.container_icon_close');

container_icon_toggle.addEventListener('click',()=>{
    console.log('bonjour');
    link_nav.classList.add('nav_link_toggle')
})




// api

// fetch("https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?locale=en-gb&currency=AED", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "booking-com.p.rapidapi.com",
// 		"x-rapidapi-key": "3cfc3b82d5mshf5c1f17e17c77e1p145e32jsn31efcadf502d"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {yhh
// 	console.error(err);
// });