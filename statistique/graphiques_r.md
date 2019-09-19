## Une variable

```
g = ggplot() + theme_minimal() + aes(x)
```

* `geom_histogram(<option>, binwidth = 5)` histogramme.
Option :
  * `aes(fill = var)` ajouter une variable.
  * `position = "fill"` empiler les éléments avec une hauteur normalisée.
  
* `geom_bar(<option>)` diagramme en barre.
Option :
  * `position = "dodge"` positionner les éléments les uns à coté des autres `aes(...,fill = var)`.
  * `aes(var), position = "fill"` empiler les éléments avec une hauteur normalisée.
  * `aes(var), position = "stack"` empiler les éléments.
  * `stat = 'identity'` pour afficher deux varibles.
Présentation :
* `coord_flip()` transformer en diagramme en barre horizontal.

### Deux variables

```
g = ggplot() + theme_minimal() + aes(x,y)
```

Type de graphique :
* `geom_boxplot()` boxplots.
* `geom_point(<option>)` nuage de points. Option :
* `aes(colour = var)` colorier les points en fonction de var.
* `aes(size = var)` dimensionner les points en fonction de var.

Libellés :
* `geom_text_repel( aes(x,y), label = var )` ajouter des étiquettes de données (library ggrepel).
* `geom_line(<option>)`
  * `aes(group = var)` une courbe pour chaque modalité de var.
  * `geom_col()` diagramme en barre avec la valeur des y. Pour classer les labels, il faut `reorder(label, valeur)` dans le `aes()`.

## Présentation

* `ggtitle("titre")` titre du graphique.
* `xlab("titre")` titre de l’abscisse.
* `ylab("titre")` titre de l’ordonnée.
* `xlim(min, max)` taille de l'abscisse.
* `ylim(min, max)` taille de l'ordonnée.

## Créer des graphiques en fonction d’une variable

* `facet_grid(.~variable)` sur une ligne.
* `facet_grid(variable~.)` sur une colonne
* `facet_wrap( ~variable)` en ligne et en colonne.

## ordonner la variable a afficher

reorder(variable, )

## Exporter le graphique

* `ggsave(plot=p, file="nom.extension")` exporter le graphique.

## Graphique interactif

* `ggplotly( graph )` rendre le graphique interactif (package plotly).

## Afficher une fonction

```
fonc = function(x){test(x)/x}
p <- ggplot(data = data.frame(x = 0), mapping = aes(x = x))
p + stat_function(fun = fonc) + xlim(-5,5)
```

## Selection sur un tableau
library(DT)
```
output$tableau <- DT::renderDataTable({ 
 instruction
})
input$tableau_rows_selected # indice des lignes selectionnées
```
