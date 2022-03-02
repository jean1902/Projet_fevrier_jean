// let user_name =document.getElementById('name');
// console.log(user_name)
// let user_pass =document.getElementById('password');
// let form_loggin =document.querySelector('#form-outer')
// let Message =document.querySelector('.text_form_login')
// let input_login_green_color_connexion =document.querySelector('#submit')
// let case_btn =document.querySelector('.login_row_btn')

//    // inscription_validation

//    form_loggin.addEventListener('submit',verification);


// //Verification
// function verification(e) {

//     //Creation de mon objet user
//     const user ={
//         name: user_name.value,
//         secondName: prenom.value,
//         pass: user_pass.value,
//         rPassword: repeatPassword.value
//     }

//     // //Vérifier si les Inputs sont vides
//     // if (user.name === "" || user.secondName === "" || user.pass ==="" || user.rPassword ==="") {
//     //     alert("Veuillez remplir tous les champs");
//     // }else{

//     //     //Verification de password
//     //     if (user.pass != user.rPassword) {
//     //         alert("Veuillez entrer le même mot de passe");
//     //     }else{
            
//     //         // Fonction enregistrer
//     //         enregistrer(user);
//     //     }
        
//     // }
//     e.preventDefault();
// }

// // FONCTION

// Enregistrement
// function enregistrer(user) {
//     let usr =JSON.parse(localStorage.getItem("student"));
//             if (usr) {  
//                 usr.push(user)
//                 localStorage.setItem("student",JSON.stringify(usr));
//                 user_name.value ="";
//                 user_pass.value ="";
                
//             }else{
//                 usr = [];
//                 usr.push(user)
//                 localStorage.setItem("student",JSON.stringify(usr));
//                 user_name.value ="";
//                 user_pass.value ="";
               
//             }
        
// }

