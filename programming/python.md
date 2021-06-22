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

`# commentaire` commentaire sur une seule ligne.
`"""commentaire"""` commentaire sur plusieurs lignes.

### Condition 

```
if condition:
	instruction
elif condition:
	instruction
else:
	instruction
```

### Les operateurs conditionnels

| Symbole | Opération |
|---|---|
| `not condition` | negation |
| `a % b` | modulo |
| `is None` | null |

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

Sequence peut etre une liste, `range(a:b)` ou une chaîne de caractères.

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
| `a ** b` | puisance |
| `a % b` | modulo |

| Fonction | Définition | 
|---|---|
| `len(varaiable)` | nombre de caractères |
| `print(message)` | afficher un message |
| `range(nbre1, nbre2 <,pas> )` | créer une liste de nombres. |
| `texte1 + texte2` | concaténer du texte. |
| `round(numeric,nbre de decimal)` | arrondir un nombre |
| `list(variable)` | convertir en liste |
| `texte.strip()` | supprimer les espaces. |


`texte[1:4]` extraire des caracètres d'une chaîne.

### installer un module

* `python -m pip install package` windows
* `pip install package` ubuntu.

### Importer des fonctions

* `import package` charger un package complet.
* `from package import module` charger un module.
* `module.fonction()` utiliser une fonction d'un module.
* `help(module)`afficher les informations sur un module.
* `from module import partieModule` importer uniquement un sous module.

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

### Les tableaux

library : `NumPy`

### Nombre aléatoire

library : `random`

| fonction | défintion |
|---|---|
| `randint(nb1,nb2)` | nbre au hasard entre nb1 et nb2 |
| `random()` | nbre aleatoire entre [0;1] |

## Sqlite 3

package : `sqlite3`

### connection a la database

```
conn = sqlite3.connect('base de donnees.db')
c = conn.cursor()
```

`conn.close()` deconnection de la dbb.

### Soumettre une requete

* `c.execute('''requete''')`
* `c.executemany('''requete''', liste)`

Les variables a utiliser dans la requetes doivent etre declarees par un `?`.
Si il y en a plusieurs, il faut les organiser sous une liste.

NB : Pensez a convertir le resultat en liste.

* `conn.commit()` ecrire ou modifier la bdd en executant la requete.

## Modifier et supprimer des fichiers

Package `os` 

* `remove(fichier)` supprimer un fichier.

Package `glob`

* `glob('*.extension')` lister les fichiers.

### enregistrer le fichier

```
open('national geographic/index.html', 'w').close()
fichier = open('journal Le Monde/index.html', "a")
fichier.write(index)
fichier.close()
```

## Ecrire une page html

`from yattag import Doc`
```
doc, tag, text = Doc().tagtext()

doc.asis('<!DOCTYPE html>')
	with tag('head'):
		doc.stag('link', id="pagestyle", href="css/style.css", rel="stylesheet")
	with tag('body'):
		text('afficher')
index = doc.getvalue()
```

`with tag('baliseHTML'):` balise qui se ferme.
`oc.stag('baliseHTML')` balise sans fermeture.
ajouter des options :
	* `id=identifiant` ajouter un identifiant.
	* `klass=classe` ajouter une classe.

NB : Possibilite d'inclure des boucles et des conditions a l'interieur du doc.asis
