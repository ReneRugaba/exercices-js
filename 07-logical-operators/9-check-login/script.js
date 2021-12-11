/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let userName = "Admin"
let password = prompt("Votre mot de passe: ")

if (userName !=="" && password !=="" && password !== null) {
      if (password === "TheMaster") {
            alert("Welcome !")
      }else{
            alert("Wrong password !")
      }
}else {
      if (password=== null) {
            alert("Canceled")
      }else{
            alert("I don't know you")
      }
}
