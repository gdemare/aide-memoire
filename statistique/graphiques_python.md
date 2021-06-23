package `charitify`

```
ch = chartify.Chart(blank_labels=True, x_axis_type='datetime')
```
`x_axis_type` ou `y_axis_type` peuvent avoir :
	* `categorical`
	* `datetime`

`ch.show('png')` afficher le graphique.

NB : fonctionne par incrementation

## Libellés

`ch.set_title("titre")` ajouter un titre.
`ch.set_subtitle("Osoustitre")` ajouter un sous-titre.


Réaliser des graphiques
from matplotlib import pyplot
pyplot.plot(abscisse, ordonnée, <type_point>)
Paramètre : faire une chaîne de caractères 
 * L1 couleur 'r' rouge 'y' jaune 'b'
 * L2 type de points o=gros points, .=petit point, ^triangle, s=carré, +=crois
 * L3 type de lignes  - ligne -- pointillé 
Exemple : `ro--` points rouges reliés par des traits en pointillé.

pyplot.show() afficher le graphique
pyplot.axis([xmin, xmax, ymin, ymax]))
pyplot.xlabel(texte) 
pyplot.ylabel(texte)
title(titre) ajouter un titre
text(x, y, texte) placer du texte n'importe ou dans la fenetre.
.grid(True) afficher une grille.

pyplot.pie(valeur, labels=, radius=)
pyplot.bar(abs, ord, width=, align='edge')

afficher une fonction 
Définir la fonction avec l'instruction function
.split('séparateur') transformer un caractère en liste en fonction d'un séparateur.
convertir les formats
int() convertir en entier
float convertir en float.
