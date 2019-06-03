```
library(shiny)
library(shinydashboard)

ui = dashboardPage(...)

server = function(input, output) {
    contenu
  }
shinyApp(ui = ui, server = server) #executer l'application
```

## Interface utilisateur

```
dashboardPage(
  contenu
)
```

### Entête

`dashboardHeader(title = "titre", titleWidth = largeur)`

### Menu

`dashboardSidebar(width = largeur, title = titre)`
Ajouter un onglet : 
```
sidebarMenu(
        menuItem(text = "onglet", tabName = "onglet")
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


| Code | Type |
|---|---|
|`box()` | classique |
|`infoBox()` | texte |
|`tabBox()`| valeur |
|`valueBox()`| valeur |

```
tabBox(
  title = titre,
  tabPanel(title = "titre", tableOutput("nomTable"))
) 
``` 
boite avec un tableau.

Arguments :
* `title = titre`
* `footer = pied de la page`
* `width = largeur`
* `color = couleur`
 
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
