/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


function checkAge(age) {
  if (age > 18) {
    return true;

  } else {
   
    return confirm('Did parents allow you?');
  }

}


// La fonction fonctionnera-t-elle différemment si `else` est supprimé ?


function checkAge(age) {
  if (age > 18) {
    return true;
  }

  // cette execution va se faire si l'age est inférieur à 18
  return confirm('Did parents allow you?');

}


// Existe-t-il une différence dans le comportement de ces deux variantes ?

// non le comportement sera le même
