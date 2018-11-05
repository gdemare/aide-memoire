## Objectif

Générer une probabilité d'appartenance à une classe.

## Méthodes

* Classificateur binaire : 
  * [Perceptron](https://github.com/gdemare/aide-memoire/tree/master/methodes/perceptron.md)
  * [Régression logistique](https://github.com/gdemare/aide-memoire/tree/master/methodes/regression-logistique.md)
  
* Classificateur multi-classes :
  * [Analyse discriminante](https://github.com/gdemare/aide-memoire/tree/master/methodes/analyse-discriminante.md)
  * [Arbre de décision](https://github.com/gdemare/aide-memoire/tree/master/methodes/arbre-de-decision.md)
  * [Boosting](https://github.com/gdemare/aide-memoire/tree/master/methodes/boosting.md)
  * [Classificateur naïve bayésien](https://github.com/gdemare/aide-memoire/tree/master/methodes/classificateur-baysien.md)
  * [Espérance-maximisation (EM)](https://github.com/gdemare/aide-memoire/tree/master/methodes/experance-maximisation.md)
  * [Forêt aléatoire](https://github.com/gdemare/aide-memoire/tree/master/methodes/foret-aleatoire.md)
  * [k-plus proches voisins](https://github.com/gdemare/aide-memoire/tree/master/methodes/knn.md)
  * [Support Vector Machine (SVM)](https://github.com/gdemare/aide-memoire/tree/master/methodes/SVM.md)
  * [Réseau de neurones](https://github.com/gdemare/aide-memoire/tree/master/methodes/reseaux-neurones.md)


### Pouvoir explicatif de variables qualitative sur une qualitative

#### V-cramer

relation entre deux variables qualitatives. Intérêt comparer les relations entre les variables.

```
cramer  <- matrix(NA,ncol(credit2),3)
for (i in (1:ncol(credit2)))
{     cramer[i,1] <- names(credit2[i])
cramer[i,2] <- sqrt(chisq.test(table(credit2[,i],credit$Cible))$statistic/
                      (length(credit2[,i])))
cramer[i,3] <- chisq.test(table(credit2[,i],credit$Cible))$p.value
}
colnames(cramer) <- c("variable","V de Cramer","p-value chi2")

# affichage des variables par V de Cramer décroissants
vcramer <- cramer[order(cramer[,2], decreasing=T),]
vcramer

par(mar = c(8, 4, 4, 0))
barplot(as.numeric(vcramer[,2]),col=gray(0:nrow(vcramer)/nrow(vcramer)),
        names.arg=vcramer[,1], ylab='V de Cramer', ylim=c(0,0.35),cex.names = 0.8, las=3)
abline(h=0.1, lty=2)
abline(h=0.2, lty=2)
```
* > 0.2 :
* > 0.1 :

### Réaliser des prédictions

```
pred = predict( object = modele, newdata = test, <type => )
```

Option type en fonction du type de modèle

| Méthode | <Type> |
|---|---|
| Abre de décision | \ |
| Régression logistique | type="response" |
| Forêt aléatoire | `type= "prob")[,2]` |
| boosting | type ='prob' )[,2] |
| classificateur naive baysien| )$posterior[,2] |
 

## Comparer la performance de modèles

[R](https://github.com/gdemare/aide-memoire/blob/master/methodes/r/modele-classification.md).

### Matrice de confusion

| |Vrai | Faux |
|---|---|---|
| **Positif** | a | b |
| **Négatif** | c | d |

On note n le nombre d'individus du jeu de test : n = a+b+c+d.

* **Taux d'erreur** ou **taux de mal classé** proportion d'individus mal classé = c+b/n

### Courbe de (Receiver Operating Characteristic)

```
predtion = prediction(pred, test$cible,label.ordering=c(0,1))
roc = performance(predtion, "tpr", "fpr")
```

Affichage graphique 
``` 
library(ggplot2)

fonc = function(x){x}
roc = ggplot() + stat_function(fun = fonc, data = data.frame(x = c(0, 1))) +
  xlab("sensibilité") + ylab("Taux de vrais positifs") + theme_minimal()

roc +
  geom_line( aes(x= roc.reg@x.values[[1]], y=roc.reg@y.values[[1]]), color="blue" )
``` 

#### Area Under the Curve (AUC)

```
library(ROCR)
performance(predtion,"auc")@y.values[[1]]
```

### Courbe de Lift (courbe de gain)

```
library(dplyr)

nb.cible = length(which(test$cibke==1))
ref = c(rep(1,nb.cible), rep(0,length(test$FlagASV)-nb.cible))

lift.rf = data.frame( cible = test$FlagASV, proba = pred.rf)
lift.rf = lift.rf %>% arrange(desc(proba)) %>%
  mutate( cumden = cumsum(cible)/sum(cible)*100,
          perpop = (seq(n())/n()*100),
          parfait = cumsum(ref)/sum(ref)*100 )
```

```
library(ggplot2)

fonc1 = function(x){
    classe = nb.cible/nrow(test)*100
    ifelse(x<classe, (x/classe)*100, 100)
  }
fonc = function(x){x}
lift = ggplot() + theme_minimal() + stat_function( fun = fonc1, data= data.frame(x = c(0, 100))) +
  stat_function(fun = fonc) + xlab("% population") + ylab("% cible")
lift + geom_line( aes(x= lift$perpop, y=lift$cumden), colour = "blue")
```
