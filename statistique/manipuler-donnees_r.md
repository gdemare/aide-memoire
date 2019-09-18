## manipuler les fichiers 

* `setwd(dossier)` changer le dossier de travail.
* `getwd()` chemin du dossier de tavail.

## Importer les données

* `read_sas(fichier)` lire des tables SAS (package : haven).
* `read.csv()` lire une table CSV.
* `write.csv()` .

## Exporter un data
 

## Manipuler le texte

* `substr(text,debut, fin)` extraire une chaine charactère.
* `gsub(schèma, remplacement, variable) ` remplacer un schèma par une nouvelle chaine de caractères.
* `str_count(text, motif)` compter le nombre d'occurence. (stringr)
* `gsub( pattern ="[.]", "_", "texte à change" )` remplacer un caractère.

## Manipuler les dates

Package : lubridate.

* `as.Date( '2017-10-12', format= )` convertir en date. 

| Définition | R | Exemple |
|---|---|---|
| Année | `%Y` | 2001 |
| Année | `%y` | 01 |
| Mois | `%m` | 09 |
| Jour | `%d` | 11 |
| Heure | %H | 12 |
| Minute | %M | 15 |
| seconde | %S | 06 |

* `time_length( interval(date1, date2), type )` calculer un âge.
date + ajout calculer une date
* `years(nbre)` année.
* `months(nbre)` mois.
* `days(3)` jour.
* `weekdays(nbre)` jour de la semaine.

format d'affichage d'une date et de l'heure
`format( datetime, format = '')` 

Extraire une information d'une date 
year
month
day
weekday
## Manipuler les données

Package : dplyr, tidyr. résultat1 %>% résultat2 : rediriger le résultat

## Filtrer

* `filter( condition )` filtrer.
* `slice( numligne )` garder les lignes.
* `sample_frac(iris,0.5,replace = TRUE)` Sélectionne aléatoirement une fraction d'observations
* `sample_n( nligne,replace = TRUE)` Sélectionne aléatoirement n observations
* `slice(10:15)` Sélectionne les lignes selon leur position
* `top_n(nlignes, variable)` Sélectionne et ordonne les n premières observations (ou groupes si les données sont groupées) ( desc() ).
 = decroissant
## selectionner

* `select( colonne1, colonne2 )` selecionner des colonnes (`-one of(col)` pour enlever une colonne).
* `distinct()` supprimer les doublons.
* `arrange( var1, var2 )` pour mettre en décroisssant `desc(var)`.

|Fonction | Définition |
|---|---|
| `starts_with(debut)` | les variables commançant par... |
| `ends_with(fin)` | les variables finissant par... |
| `contains(chaine)` | contenant la chaine. |

## Réorganiser les données
package : tidyr
* `gather(cases,"year","n", 2:4)` fusionner des colonnes en lignes.
* `separate(storms,date, c("y","m","d"))` diviser une colonne en plusieurs.
* `spread(pollution, size, amount)` distribuer les lignes dans des colonnes.
* `unite(data,col,...,sep)` concaténer plusieurs colonnes en une seule.

## Construire de nouvelles variables

* `mutate( nom=formule )` Appliquer une fonction window à chaque variable.
* `mutate_each(iris, funs(fonction) )` Appliquer une fonction window à chaque variable.
* `transmute( nom=formule )` Construitre une ou plusieurs variables en supprimant les originales.

| Fonction Window | Description |
|---|---|
| n | Nombre de lignes |
| n_distinct | nombre de lignes distincts |
| lead | Copier avec des valeurs décalées à gauche. |
| lag | Copier avec des valeurs décalées à droite. |
| dense_rank | Ordonne sans sauts de rangs. |
| min_rank | Ordonne avec sauts de rangs. |
| percent_rank | Rangs de (min rank) entre [0, 1], |
| row_number | Ordonne en affectant aux liens la première position. |
| ntile | Divise en n groupes. |
| between | Les valeurs sont-elles entre a et b? |
| cum_dist | Distribution cumulée |
| cumall | Cumul tant que vrai |
| cumany | Cumul dès que vrai |
| cummean | Moyenne glissante |
| cumsum | Somme cumulée |
| cummax | Maximum cumulé |
| cummin | Minimum cumulé |
| cumprod | Produit cumulé |
| pmax | Maximum par élément |
| pmin | Minimum par élément |

## Grouper des données

* `group by(var)` grouper les observations par la var.
* `ungroup(iris)` dégrouper le jeu de données.

## Résumer des données

* `summarise( nom = formule)` appliquer une fonction.
* `summarise each(funs(fonction))` appliquer une fonction à chaque variable.
* `count( variable, wt = valeur)` Dénombre le nombre d'observations de chaque valeur d'une variable.

| Fonction résumé | Défintion |
|---|---|
| first | Première valeur d'un vecteur |
| last | Dernière valeur d'un vecteur |
| inth | Nième valeur d'un vecteur |
| n | Nb de valeurs |
| n_distinct | Nb de valeurs distinctes |
| min | minimum |
| max | maximum |
| mean | Moyenne |
| median | Médiane |
| sd | Ecart-type |

## Les jointures

A %>% jointure(B, <by=c( "var1" = "var2")> )
* `inner_join(data)` A et B
* `left_join(data)` A (+ A et B)
* `right_join(data)` B (+ A et B)
* `semi_join(data)` A et pas B.
* `anti_join(data)` B et pas A.
* `full_jon(data)` A ou B.
Option : by = c("col1"="col2"): préciser la jointure.

## Fusions lignes et colonnes

* `bind_rows(ligne)` Ajouter à y comme nouvelles lignes
* `bind_cols(colonne)` Ajoutez à y comme nouvelles colonnes.

## Opérateurs ensemblistes

* `intersect(y,z)` Observations appartenant à y et z
* `setdiff(y,z)` Observations appartenant à y et pas à z
* `union(y, z)` Observations appartenant à y et zou l'un des 2

## Discrétiser des variables

* `discretize( var, categories = nbre groupe, label = )` discrétiser une variable (package : arules).
  * `method = "frequency"` méthode.
  * `categories = nbre` nombre de classes.
* `cut2( var, breaks, minmax=T)` découpe en classe en fonction du verteur borne`(val1;[` (package Hmisc).
* `smbinning(df=data, y="var", x = "var_quanti")` discrétiser de facon optimale les varibles du data pour un score. (packages : smbinning); y doit être de type integer.
  * `$cuts` bornes.
 
## Autres fonctions

* `model.matrix( var1)` dichotomiser un data (tableau disjonctif).
* `na.exclude( data )` supprimer les lignes avec au mois une valeur manquante.
* `case_when(condition1 ~ val1, condition2 ~ val2,...)` fonction équivalente au CASE WHEN en sql.
* `scale(fromage,center=T,scale=T)` centrer et réduire les données.
* `Sys.sleep(seconde)` attendre un nombre de seconde avant la suite de l'exécution.
