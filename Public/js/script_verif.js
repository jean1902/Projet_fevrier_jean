
// console.log('oh mon gas ')
// //validation
// let user_name =document.getElementById('name');
// console.log(user_name)
// let user_pass =document.getElementById('password');
// let form_loggin =document.querySelector('#form-outer')
// let Message =document.querySelector('.text_form_login')
// let input_login_green_color_connexion =document.querySelector('#submit')
// let case_btn =document.querySelector('.login_row_btn')

// console.log(input_login_green_color_connexion )
// console.log(Message)



// let text_password =document.querySelector('.text_password')

// form_loggin.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let data = {
//         username : user_name.value,
//         password : user_pass.value,
//     }
//     let data_parse = JSON.stringify(data);
//     localStorage.setItem("connexion",data_parse);

//    for (let user in data) {
//     console.log(data.username)
//     if( data.username ==="jean" && data.password ==="tourisme"){
//         input_login_green_color_connexion.style.backgroundColor="green";
//         input_login_green_color_connexion.value="connecte";
//         console.log('hello')
       
//     location.href="index.php"
//      case_btn.style.display="none"
    
//     }else{
//         console.log('petit fou la')
//       console.log(Message)
//       Message.textContent=`username ou mot de Pass incorrect`;
//       Message.style.display="block";
//        Message.style.color="red";
//     }
// }})