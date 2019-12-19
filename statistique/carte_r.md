## Les cartes
 
 Nécessite un compte [Google developper](https://console.developers.google.com).
 
### Obtenir la position géographique d'une adresse (lattitude et longitude)
 
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
## Carte avec des fichiers DBF, PRJ, SHP, SHX

library : `rgdal`

```
occ = readOGR(dsn = dossier, layer = debut_fichier, stringsAsFactors = F, encoding = 'UTF-8')
occ_dt = fortify(occ)
```

## Tracer une carte 

```
ggplot(data = test1, aes(x=long, y=latt)) + theme_minimal() + 
  geom_polygon(aes(group = `code.commune.INSEE`)) 
```
