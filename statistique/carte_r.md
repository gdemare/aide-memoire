## Les cartes
 
 Nécessite un compte [Google developper](https://console.developers.google.com).
 
### Obtenir la position géographique d'une adresse (lattitude et longitude) en requêtant Google Map
 
Soumettre la requête : `https://maps.googleapis.com/maps/api/geocode/xml?address=`ADRESSE`&key=`CLE

```
library(XML)
resultRequest = xmlTreeParse(readLines(REQUETE), useInternalNodes=TRUE)
root = xmlRoot(resultRequest)
lattitude = as.numeric(xmlValue(root[['result']][['geometry']][['location']][['lat']]))
longitude = as.numeric(xmlValue(root[['result']][['geometry']][['location']][['lng']]))
```

## Graphique with ggplot2

```
library(ggplot2)
mapWorld = borders("world", regions = "Malta")
ggplot() + mapWorld
```

## Graphique avec un fond de carte Google Map

Attention activer 

```
library(ggmap)

register_google(key = key)

# récupérer la lattitude and longitude d'un endroit
malta = as.numeric(geocode("Malta"))

# récupérer une carte sur google map (enable the static maps API on google cloud)
map = get_googlemap(center = malta, zoom = 11, scale=, maptype = "roadmap")

library(ggrepel)
googlegraph = ggmap(map) +
  geom_point(data = donnee, aes( x=long , y = latt, size=turnover, color=turnover)) + 
  geom_text_repel( data=donnee, aes(long,latt), label = donnee$name )
googlegraph
```
## Carte avec des fichiers shapefile : DBF, PRJ, SHP, SHX

Package : `rgdal`

* `readOGR(dsn = dossier, layer = debut_fichier, stringsAsFactors = F, encoding = 'UTF-8')`

## Spatial Polygon et Point DataFrame

### Importer un fichier GeoJson

Package : `rgdal`

* `readOGR("fichier.geojson", stringsAsFactors = F,encoding = 'UTF-8')`

### Manipuler les données SpatialPolygonsDataFrame

Package : `spdplyr `.

* Il s'utilise comme dplyr.

### Réaliser une carte avec tmap

Package : `tmap`.

* `tm_shape(SpatialPolygonsDataFrame)` données à représenter.
* `tm_borders()` ajouter des frontières.
* `tm_fill()` remplir la carte.
* `tm_text("variable")` afficher du texte.
 * `ymod = absisse` décaler l'etiquette sur l'axe des abscisses.
 * `just="top/bottom/left/right"` position du texte. 
* `tm_dots()` afficher sous forme de points.
 * `size=taille` taille des points.

Paramètre :
* `alpha = 0.8` transparence.
* `col = couleur/variable` changer la couleur.
* `palette = "couleur"` changer la palette.

## Exporter le graphique

* `tmap_save(data, filename = "fichier.png")` exporter le graphique png, html.

### Personnaliser les couleurs

library `RColorBrewer`

`brewer.pal(nbNiveau, palette )` créer une palettes 

| code | couleur 1 | couleur 2 | couleur 3 |
|---|---|---|---|
| `YlOrRd` | jaune | orange | rouge |
| `YlOrBr` | jaune | orange | marron |
| `YlGnBu` | jaune | vert | bleu |
| `RdYlGn` | rouge | jaune | vert |
| ` ` |  |  |  |


## Créer un fichier GeoJson

library `rgdal`

```
SpatialPointsDataFrame(longitute lattitude,autres variables)
### export au format GeoJson
writeOGR(data, 'fichier.geojson','nom couche', driver='GeoJSON')
```

## Changer le repère de projection

`spTransform(x = spatialPointsDataFrame, CRSobj = CRS )` changer de repère (package `sp`).

| CRS | résultat |
|---|---|
| `"+init=epsg:4326"` | en degré |

## Transformer un SpatialPolygonsDataFrame en DataFrame pour ggplot2

```
polyToGgplot2 = function(SpatialPoly){
  repere = spTransform(x = SpatialPoly, CRSobj = "+init=epsg:4326")
  fortifier = fortify(repere)
  repere@data$id = unique(as.numeric(fortifier$id))
  polyToGgplot2 = join(fortifier, repere@data, by="id")
  polyToGgplot2
}
```
