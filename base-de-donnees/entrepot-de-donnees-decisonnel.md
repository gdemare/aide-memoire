# Système d'Information Décisionnel (SID)

```sequence
Machines
                        _________________           _________________           ______________________
                       | - Fichiers      |         | Operating Data  |         | Entrepôt de Données  |          
Utilisateurs <--OLTP-->| - Bases métiers |--ETL--->| Store (ODS)     |--ETL--->|  Décisionnel (EDD)   |<--OLAP-- Utilisateurs du 
                       |_________________|         |_________________|         |______________________|          Décisionnel

Données

                       - Hétérogènes              - Hétérogènes                 - Homogènes
                       - Redondantes              - Redondantes                 - Non redondantes
                       - Volatiles                - Historisées                 - Historisées
                       - Non agrégées             - Non agrégées                - Agrégées

```

## Bases métiers 

Les bases métiers sont optimisées pour de l'écriture et la modification des enregistrements (OLTP). 

## Entrêpot de données décisionnel

La base de données est opitmisée pour l'analyse (OLAP).

## Extract Transform Load (ETL)

ELT : Les données chargees puis transormees pour utiliser la puissance de traitement de l'EDD.

## Data lake

Stocke des données non structurées contrairement aux bases classiques.

## Les types de données

Données structurées :
* Texte
* Nombre
* Date/heure

Données non structurées :
* Image
* Son 
* Vidéo

## 

Data lake dépôt de données brutes accessible en lecture seule.

framework 
Hadoop Distributed File System (HDFS) un système de fichiers distribué

Calcul paralléle distribué

Map Reduce 

## Réglémentation Générale pour la Protection des Données (RGPD)   

