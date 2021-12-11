# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ?

```js
let banane;

alert(banane ?? "pomme"); // pomme

```

## Quelle est la valeur de retour ce code ?

```js
let banane = "Trop bon";

alert(banane ?? "pomme"); // Trop bon

```

# Comparison with "||"

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon."); // Trop bon
```


## Après avoir effectué les exercices précédent pouvez vous dire:

### Ce que retourne, par définition, l'opérateur "||" ? 

 Cette opérateur retourne la première valeur definit ou la dernière lu par précédence 

### Ce que retourne, par définition, l'opérateur "??" ?

 Cette opérateur retourne la valeur conditionnel si elle existe, si non elle retourne la dernière valeur lu par précédence


# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (prioritée) ?


### Faut il:
 #### utiliser ?? avec tous les autres opérateurs ? 
    non
 #### ne jamais utiliser ??? avec tous les autres opérateurs ?
    non
 #### quelques fois utiliser ?? avec les autres opérateurs ?
    oui

### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane" // retourne une erreur
```

```js
let fruit = ("poire" && "pomme") ?? "banane" // retourne pomme

alert(fruit)
```