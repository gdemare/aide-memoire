```
library(shiny)
library(shinydashboard)

shinyApp(
  ui = dashboardPage(affichage),
  server = function(input, output) {
    contenu
  }
)

dashboardPage(
  contenu
)
```

## Interface utilisateur

### Entête

`dashboardHeader(title = "titre", titleWidth = largeur)`

### Menu

`dashboardSidebar(width = largeur, title = titre)`
Ajouter un onglet : 
```
sidebarMenu(
        menuItem("onglet", tabName = "onglet")
      )
```

### Corps de la page

`dashboardBody(title = titre, skin = couleur, contenu)`

`tabItems(contenu)` page

```
tabItems(
  tabItem(tabName = onglet, contenuOnglet)
)
```
créer un onglet.

#### Contenu des onglets

* `title = titre`
* `footer = pied de la page`
* `width = largeur`
* `color = couleur`


`box()` boite classique.
`infoBox()` boite avec du texte.
`valueBox()` boite avec une valeur.
```
tabBox(
  title = titre,
  tableOutput("nomTable")
) 
``` 
boite avec un tableau.
 
## Server

```
server = function(input, output) {
  output$nom = resultat
}
```

Les sorties doivent être stockées dans la variable 

`renderText({texte})` texte.
`renderPlot({graphique})` graphique.
`renderTable({tableau})` tableau.

### variable réactive

`variable = reactive(valeur de la variable)` actualiser la rapport en fonction de la variable.
