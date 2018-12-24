 sudo /etc/init.d/apache2 status : savoir si apache est démarrer			

 ```
 <?php 
 	code 
 ?>
 ``` 
 insérer du code php.
* `/*commentaire*/` mettre un commentaire (pour une unique ligne //) ( ps : même chose que hmtl)
* `echo "texte"` afficher du text (saut a la ligne : `\n`).
* `print "texte"` afficher du texte
* `include("page")` inclure une page.


### Les Variables

`$«nom»` déclarer une varaible.
concater 2 solutions:
`echo "«text1» $«var» «text2»";`
`echo '«text1»'.$«var».'«text2»`
Opération de base : +,-,*,/,%

### Les Conditions

| Comparateur | défintion |
|---|---|
| == |
| < |
| > |
| <= |
| >= |
| != |

```
if («condition»)
{«instruction»}
elseif(«condition»)
{}
else{}
```
conditon SI

Condtion multiple:
| | | 
|---|---|
| `AND` `&&` | | 
| `OR` `||` | |

```
switch («variable»)
{case «val» :
«instruction1»
break;
«...»

default:
«instruction»;} 
```
pour plusieurs teste ==.

`VAR1 = (CONDITION) ? VAL1 : VAL2 ;` conditon terniaire

### Les Boucles

```
while (condition)
{INSTRUCTION}
```
tant que la condition est vrai exécuter.

```
for( INITIAL ; CONDITION ; INCREMENTATION)
{INSTRUCTION}
```
boucle Pour.

### Les Fonctions

1/Traitement de cha^ines de caractères

| `strlen(VAR)` | longueur d'une chaîne de caractères. |
| `str_replace(VAR1, VAR2, VAR)` | remplace tout les VAR1 par VAR2 dans la ch^aine VAR. |
| `str_stuffle( VAR )` | méléanger une cha^ine de caractères. |
| `strtolower( VAR )` | écrire en minuscule. |

Récupérer la date :

date( PARA )
Paramètres :
H > heure
i > Minute
d > jour
m > mois
Y > année
3/ Création d'un fonction
function NOM( PARAMETRE )
{
	INSTRUCTION
}

### Les Tableaux

1/ ARRAY
* `$TAB = array ( VAL1, VAL2)` créer un tableau array (0,1,2,...)
* `$TAB[ NUM ]` afficher ou 

SUITE 
2ème Partie

isset(PARA) : teste la précence d'un paramètre.
DEBUT

Transmettre des données avec les formulaires
1/
<form method="METHO" action="CIBLE.php" >
</form>: créer un formulaire METHO=(get ou post)
EXEMPLE:
```
<form action="cible.php" method="post">
	<input type="text" name="identifiant" />
	<input type="password" name="identifiant" />
	<input type="submit" value="Valider" />
</form>
```
* `<texarea name="NOM" rows="NBRELIG" cols="NBRECOL" ></textarea>` créer une grande zone de texte.
<select name="">
	<option value="choix1">choix1</option>
</select> : créer une liste déroulante (selected="DEFAUT" pour donner une valeur par défaut.
<input type="checkbox" name="NOM" id="case" />
<label for="case">case1</label>
</input> : créer une liste a cocher ( PS: pour qu'une case soit cohé par défaut : checked="checked")
<input type="radio" name="NOM" value="VAL1" id="VAL1" />
	<label for="VAL1">VAL1</label>
	<input type="radio" name="NOM" value="VAL1" id="VAL2" />
	<label for="VAL2">VAL2</label>  : bouton d'option.
type="hidden" : créer un champ caché.
Envoyer des fichiers grâce au formulaire
(1) enctype="multipart/form-data" : rajouter dans la balise form
(2) type="file" : le type du submit
(3)information sur le fichier envoyer a CIBLE
* `$_FILES['FICHIER']['name']` contient le nom du fichier.
* `$_FILES['FICHIER']['type']` le type EX : gif => image/gif
* `$_FILES['FICHIER']['size']` la taille tu fichier limiter à 8Mo.
* `$_FILES['FICHIER']['tmp_name']` nom temporaire du fichier.
* `$_FILES['FICHIER']['error']` renvoie 0 si il n'y a pas eu d'erreur dans l'envoi.

`pathinfo(VAR)['extension']` renvoie l'extension du fichier.
`move_uploaded_file(FICHIER, NOM)` FICHIER correspond au nom temporaire du fichier et NOM sous lequel le fichier sera stocké.
`htmlspecialchars(VAR)` évtiter la faille XSS (tout le texte est renvoyer ).

Variables superglobalees, sessions et cookies

1/print_r(VARGLOB) : ficher ce que contient une variables superglobale.
2/Liste des différentes vairables globales:
`$_SERVER` EX : $_SERVER['REMOTE_ADDR'] = l'adresse IP du client.
`$_ENV`
`$_SESSION` variables qui restent stockées le temps de la visite.
`$_COOOKIE` contient les valeurs des cookies enregistrés sur l'ordinateur (stocker plusieurs mois).
`$_GET` paramétre données a l'url.
`$_POST` variables contenues dans un formulaire.
`$_FILES` liste des fichiers envoyé via un formulaire.
3/Les Sessions :
(1) session_start(): démarre le système de sessions.
(2) session_destroy() : ferme la session du visiteur (time out).
!Attention: session_start() doit etre déclarer avant  <!DOCTYPE> et sur chaque page.
(3) $_SESSION['NOM'] : la variable est une array.
4/Les cookies
(1) setcookie('NOM','VAL',TEMPS) :créer un cookie TEMPS est en seconde. Exemple IMPORTANT : setcookie('pseudo', 'Mateo21', time() + 365*24*3600).
!Attention un cookie est toujours déclarer avant <!DOCTYPE>
Pour sécrusier un cookie : setcookie('pseudo', 'Mateo21', time() + 365*24*3600, null, false, true )
$_COOKIE['NOM'] : appeler un cokkie.
(3) Modifier le cookie, faire appel a set.

Lire et écrire un fichier

1/
