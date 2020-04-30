package `charitify`

```
ch = chartify.Chart(blank_labels=True, x_axis_type='datetime')
```
`x_axis_type` ou `y_axis_type` peuvent avoir :
	* `categorical`
	* `datetime`

`ch.show('png')` afficher le graphique.

NB : fonctionne par incrementation

## Libelles

`ch.set_title("titre")` ajouter un titre.
`ch.set_subtitle("Osoustitre")` ajouter un sous-titre.
