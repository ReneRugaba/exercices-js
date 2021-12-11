/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let age = prompt("Veuillez entrer votre âge :")

alert(age <= 90 && age >= 14  ? 
      "âge compis entre 14 ans et 90 ans" 
      :"âge pas compis entre 14 ans et 90 ans" )

alert(!(age <= 90 && age >= 14)  ? 
      "âge pas compis entre 14 ans et 90 ans" 
      : "âge compis entre 14 ans et 90 ans")
      
