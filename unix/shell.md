Les types de shell les plus répandus :
* sh : Bourne Shell. L'ancêtre de tous les shells.
* bash : Bourne Again Shell. Une amélioration du Bourne Shell, disponible par défaut sous Linux et Mac OS X.
* ksh : Korn Shell. Un shell puissant assez présent sur les Unix propriétaires, mais aussi disponible en version libre, compatible avec bash.
* csh : C Shell. Un shell utilisant une syntaxe proche du langage C.
* tcsh : Tenex C Shell. Amélioration du C Shell.
* zsh : Z Shell. Shell assez récent reprenant les meilleures idées de bash, ksh et tcsh.

* `#!/bin/bash` indique quel shell utiliser (ligne indispensable).
* `# commentaire` ajouter des commentaires.
* `/*commentaire*/` commentaire sur plusieurs lignes.

## Créer & Exécuter un script
	  
* `chmod +x script` donner les droits d'éxcution.
* `./script` exécuter un script.
* `bash -x sccript` afficher les détails de l'exécution.
5/ appeler un script depuis n'importe ou : déplacer le script dans un dossier "PATH". Pour afficher la liste de ces dossiers : echo $PATH

## Variable type texte
	  
¡Attention le Bash est trés pointieux sur les accents, espaces,...etc.!
	  
* `variable='texte'` déclarer une variable de type texte.
* `echo $variable` afficher ou appeler une variable, renvoie les paramètres qu'elle reçoit.
Paramètres:	
	* `e` activer les retours à la ligne `\n`.
	-n «nombre» : coupe le message au bout de «nombre» de lettres.
		-t «nombre» : limiter le temps de la saisie (en seconde).
		-s : ne pas afficher le texte saisi. 
Types de quotes:

| Symbole | action |
|---|---|
| `''` | (apostrophes) affiche ce qui est contenu tel quel |
| `""` | (guillemets) analyse et exécute le contenu reconnu|
| `''` | (back quotes) demande à bash d'exécuter ce qui se trouve à l'intérieur |

* `read variable variable2` demander une saisie et la stock (NB : stock un mot par variable jusqu'a la dernière qui va garder le reste).
Paramètres :	
	* `p texte variable` afficher un message pour l'utilisateur.
echo "Bonjour $nom !"
		
* `${#variable}` afficer la longueur d'une variable.
	
## Variable type nombre

¡Attention, bash ne gére pas les nombres, il faut donc utiliser la commande "let" pour les nombres entiers et "bc" pour les nombres décimaux!
1/ let "«nom variable» = «valeur»" : affecter à une variable un nombre.
2/ Les opérations utilisables avec "let" :
	(1) l'addition : + ;
	(2) la soustraction : - ;
	(3) la multiplication : * ;
	(4) la division : / ;
	(5) la puissance : ** ;
	(6) le modulo (renvoie le reste de la division entière) : %.

## Les variables d'environnement

* `env` afficher toutes les variables d'environnement que vous avez actuellement en mémoire.
* `export` Pour définir sa propre variable ( approfondir ).

## Variables paramètres

1/[0;9] Automatiquement créer: ./«script».sh param1 param2 param3 . Elles se nomment:	- $# : contient le nombre de paramètre.
				- $0 : contient le nom du script exécuté (ici ./«nom».sh).
				- $1 : contient le premier paramètre.
				- $2 : contient le second paramètre .
... ;
				- $9 : contient le 9ème paramètre.
2/ + de 9 paramètres : utiliser «shift» pour décaler les paramètres. Exemple :
./variables.sh param1 param2 param3

echo "$1" <--- afficher «param1»
shift
echo "$1" <--- afficher  «param2»

## Les tableaux

* `tableau=('valeur0' 'valeur1' 'valeur2')` définir un tableau.
* `${tableau[num]}` appeler la variable d'une case d'un tableau. PS : la 1ère case est zèro.
* `tableau[num]='valeur'` définir une valeur d'une case.
* `${tableau[*]}` appeler l'ensemble d'un tableau.

## Les tests--

1/ sur des chaînes de caractères :
	(1) $chaine1 = $chaine2 : Vérifie si les deux chaînes sont identiques. Notez que bash est sensible à la casse : « b » est
donc différent de « B » ( Il est aussi possible d'écrire « == »).
	(2) $chaine1 != $chaine2 : Vérifie si les deux chaînes sont différentes.
	(3) -z $chaine : Vérifie si la chaîne est vide.
	(4) -n $chaine : Vérifie si la chaîne est non vide.
2/ sur des nombres : 
	(1) $num1 -eq $num2 : Vérifie si les nombres sont égaux (equal). À ne p	as confondre avec le « = » qui, lui, compare deux
chaînes de caractères.
	(2) $num1 -ne $num2 : Vérifie si les nombres sont différents (non equal).
	(3) $num1 -lt $num2 : Vérifie si num1 est inférieur ( < ) à num2 (lower than).
	(4) $num1 -le $num2 : Vérifie si num1 est inférieur ou égal ( <= ) à num2 (lower or equal).
	(5) $num1 -gt $num2 : Vérifie si num1 est supérieur ( > ) à num2 (greater than).
	(6) $num1 -ge $num2 : Vérifie si num1 est supérieur ou égal ( >= ) à num2 (greater or equal).
Exemple : [ $1 -ge 20 ] 
3/ sur des fichiers :
	(1) -e $nomfichier : Vérifie si le fichier existe.
	(2) -d $nomfichier : Vérifie si le fichier est un répertoire. N'oubliez pas que sous Linux, tout est considéré comme un fichier, même un répertoire !
	(3) -f $nomfichier : Vérifie si le fichier est un... fichier. Un vrai fichier cette fois, pas un dossier.
	(4) -L $nomfichier Vérifie si le fichier est un lien symbolique (raccourci).
	(5) -r $nomfichier Vérifie si le fichier est lisible (r).
	(6) -w $nomfichier Vérifie si le fichier est modifiable (w).
	(7) -x $nomfichier Vérifie si le fichier est exécutable (x).
	(8) $fichier1 -nt $fichier2 Vérifie si fichier1 est plus récent que fichier2 (newer than).
	(9) $fichier1 -ot $fichier2 :Vérifie si fichier1 est plus vieux que fichier2 (older than).
4/ [test1] «connecteur» [test2] : combiner plusieurs test :
	(1) && : ET 
	(2) || : OU
5/ [ ! «test» ] : négation du test.

	3.2 ---if : la condition la plus simple---

¡ Attention, les espaces dans les crochets sont importants !
1/ if [ «test» ]
then
«instructions»
fi : si la «test» est vrai, alors exécuter «instructions».
2/ else «instruction»: (sinon) effectuer les instructions dans le cas contraire.
3/ elif [ «test» ] then «instruction» : sinon si le «test» est vrai...
4/ Exemple combiner :
if [ «condition1»]
then «instruction1»
elif [ «condition2» ]
then «instruction2»
elif [ «condition3» ]
then «instruction3»
else
«instruction4»
fi
5/ case «varaible à tester» in
		«condition1») «instruction1»;;
		«condition2») «instruction2»;;
		*) «instruction3»;;
esac : tester toujours la même variable (avantages : plus lisible que if). Ps : pour les tests OU est "|" et pas "||" ;
6/  if [ -f $VAR1 ] && [ -f $VAR2 ] && [ -f $VAR3 ]
 then  .... : plusieursconditions à vérifier.

## Les Boucles---


```
while [test]
do
instructions
done
``` 
"tant que" répéte une action jusqu'a ce que la condition ne soit plus VRAI.

```
until
do
instructions
done
``` 
"tant que" répéte une action jusqu'a ce que la condition soit VRAI.

```
for «variable» in '«valeur1»' '«valeur2»' '«valeur3»'
do
«instruction»
done
```
parcourir la liste de valeurs et de boucler autant de fois qu'il y a de valeur. La liste des valeurs n'a pas besoin d'être définie dans le code.

```
`for i in `seq <début» «*pas» «fin»`; 
d
«instruction»
done
```
le for "classique", parcourrir une suite de nombre où «début» «*pas» «fin» sont des nombres.

```
for (( i = 0; i < «nbre»; i++ )); do
«instruction»
done
```
for classique
