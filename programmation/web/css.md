### News papers style

* `column-count: ;` nombre de colonnes.
* `column-width: ;` taille des colonnes.
* `column-gap: ;` espace entre deux colonnes.

## Color

* `rgba()` les trois couleurs primaires.
* `linear-gradient(direction, couleur1, couleur2)` degrade
 * `to right` gauche a droite.

## Background

* `background-color: ;` couleur.
* `background-image: url('liens');` ajouter une image en arrire plan.

## Transistion

* `transition-duration: 4s;` duree de la transition.
* `transition-delay: 2s;` temps avant le declenchement de la transition.

## Flexbox

### contenaire
* `display: flex;` activer la propriete flex.
* `flex-direction: ;` direction de l'alignement(row, column, row-reverse, column-reverse).
* `flex-wrap: ;` comportement des elements lorsqu'il n'y plus de place.
 * `nowrap` pas de retour à la ligne (par défaut).
 * `wrap` les éléments vont à la ligne lorsqu'il n'y a plus la place
 * `wrap-reverse` les éléments vont à la ligne lorsqu'il n'y a plus la place en sens inverse
* `justify-content: ;`
 * `flex-start`, `flex-end`
 * `center`
 * `space-between`
 * `space-around`
* `align-items: ;` changer l'alignement du deuxième axe.
 * `stretch` les éléments sont étirés sur tout l'axe (valeur par défaut)
 * `flex-start`, `flex-end` alignés au début/fin.
 * `center` alignés au centre

## adapter les proprietes en fonction de la taille de l'ecran

```
@media only screen and (max-device-width:480px) {
  nouvelles proprietes
}
```
