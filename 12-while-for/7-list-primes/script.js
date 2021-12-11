/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let n = prompt("Donner un nombre superieur à 2")
let testNan = Number(n) // verifie si n est un nombre

/**
 * Fonction qui verifie que le nombre mis en argument est premier
 * @param {Number} nb 
 * @returns Boolean
 */
let nbEstPremier=(nb)=>{
      if (nb > 1 ) { // ceci s'execute si nb est supérieur à 1
            for (let i = 2; i < nb; i++) {
                  if(nb % i === 0) return false
             }
      }
      return true
}

if (!Number.isNaN(testNan)) {
      let arrayPremier = []

      for (let i = 2; i < n; i++) {
      
            if(nbEstPremier(i)){ // ici je verifie si i est premier avant de le mettre dans mon array de nombres premiers
                  arrayPremier.push(i)
            }
      }

      alert(arrayPremier.join(',')) // ici j'affiche le contenu de mon array après l'avoir converti en string séparé par une vergule

}else{
      alert("Merci de mettre un nombre valide!")
}