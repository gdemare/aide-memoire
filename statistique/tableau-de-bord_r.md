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

* `title = titre` titrer l'application
* `skin = couleur` theme utilisé.

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

```
dashboardBody(
    fluidRow(contenu)
)
```

`tabItems(contenu)` page

```
tabItems(
  tabItem(tabName = onglet, contenuOnglet)
)
```
créer un onglet.
Parametres :
* `badgeLabel = nom, badgeColor = couleur` Ajouter un badge
* `disable = TRUE` desactiver la barre.

#### Contenu des onglets


| Code | Type |
|---|---|
|`box()` | classique |
|`infoBox()` | texte statique |
|`tabBox()`| valeur |
|`valueBox()`| valeur dynamique |

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

Pour rendre une valeur dynamique avec valueBox

```
output$nom <- renderValueBox({  
    valueBox(a completer)
})
```

### zone de saisie

type(inputId = id, ....) 
input$id

| R | bibliotheque | Type |
|---|---|---|
| actionButton() | | bouton | 
| checknocInput() | | |
| checkboxGoupInput() | | |
| dateInput() | | |
| dateRangeInput() | | |
| fileInput() | | |
| numericInput()| | | 
| paswordInput()| | | 
| colourInput() | library(colourpicker)| |
| radioButtons() | | |
| selectInput() | | liste a choix multiple |
| sliderInput() | | barre de défilement |
| textInput()| | |

## Server

```
server = function(input, output) {
  output$nom = resultat
}
```

Les sorties doivent être stockées dans la variable

| code server | rendu | code ui |
|---|---|---|
|`renderText({texte})`| texte | `textOutput('variable')` |
| `renderPlot({graphique})`| graphique | `plotOutput('variable')` |
| `renderTable({tableau})`| tableau | `tableOutput('variable')` |
| `renderDataTable` | donnees | `dataTableOutput('variable')` |
| `renderPlotly` | donnees | `plotlyOutput('variable')` |
| `menu`

renderPrint(variable)

### variable réactive

`variable = reactive(valeur de la variable)` actualiser la rapport en fonction de la variable.
`variable()` utiliser une variable reactive.

### Methode de saisie 

* `label = 'titre'` texte a afficher.


| textAreaInput() | |

### liste interactive utilisant une variable reactivie

```
    uiOutput

  filterGenre = reactive(genre)
  output$interaction_slider = renderUI({
    selectInput("select", label = "Select box", 
                choices = as.list(genre)$genre_label, selected = 1)
```

## Selection sur un tableau
library(DT)
```
output$tableau <- DT::renderDataTable({ 
 instruction
})
input$tableau_rows_selected # indice des lignes selectionnées
```

`selection = valeur`
    * `single` une seule ligne.
