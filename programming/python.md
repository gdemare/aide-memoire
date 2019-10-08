# Python

NB les chemins s'écrivent avec le `/`.

## Environement de développement

Jupyter

## Configurer Python sur Windows

* Copier le chemin de la licence et des programmes python.
* Panneau de configuration\Système et sécurité\Système > Paramètre système avancé > Variable d'environnement
* Ajouter une variable système 
	* nom : PYTHON_HOME
	* valeur : chemin copié
* Modifier la variable Path
* Ajouter %PYTHON_HOME% 

répéter l'opération pour le sous dossier library/bin et scripts

`python` démarrer une session python.

## commenter le code

`"""commentaire"""` ecrire un commentaire

### Condition 

```
if condition:
	instruction
elif condition:
	instruction
else:
	instruction
```

### Boucle tant que

```
while Condition:
	instruction
```

### Boucle for

```
for i in sequence:
	instruction
```

### Les listes

* `liste = [ val1, val2]` déclarer une liste.
* `liste[]` afficher un élément.
* `del liste[numéro]` supprimer une valeur.
* `liste.append(valeur)`ajouter une valeur.

### Fonction 

```
def fonction (param1, param2=10):
	instruction
	return valeur
```

`=10` valeur par défaut de la variable.

| Symbole | Opération |
|---|---|
| a ** b | puisance |
| a % b | modulo |

| Fonction | Définition | 
|---|---|
| `len(varaiable)` | nombre de caractères |
| `print(message)` | afficher un message |
| `range(nbre1, nbre2 <,pas> )` | créer une liste de nombres. |
| `texte1 + texte2` | concaténer du texte. |

`texte[1:4]` extraire des caracètres d'une chaîne.

### installer un module

```
python -m pip install package
``` 

### Importer des fonctions

`import module` charger un module.
`module.fonction()` utiliser une fonction d'un module.
`help(module)`afficher les informations sur un module.
`from module import partieModule` importer uniquement un sous module.


## Manipuler les images

`skimage` (scikit-image)

### Fonction de base

`from skimage import io`

* `io.imread("chemin")` importer une image.
* afficher l'image
```
io.imshow(monImage)
io.show 
```

### Calculs numériques et gestion des tableaux de nombres.

library : `NumPy`
