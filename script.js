$(document).ready(function() {
    //----------------------------------------------

    // mementoMenu en dessous de la barre de naviguation

var hauteur = document.getElementsByTagName("nav")[0].offsetHeight + 'px';
//mementoMenu
console.log(hauteur);
document.getElementById("mementoMenu").style.setProperty("top", hauteur);
document.getElementById("contenu").style.setProperty("margin-top", hauteur);

    // Print the memento menu
    var varMemento = false;
    $("#mementoMenu").hide();
    $("#mementoButton").click(function() {
        if (varMemento == false) {
            $("#mementoMenu").show();
            var largeur = document.getElementById("mementoMenu").offsetWidth + 'px';
            varMemento = true;
        } else {
            $("#mementoMenu").hide();
            var largeur = '0px';
            varMemento = false;
        };
      document.getElementById("contenu").style.setProperty("margin-left", largeur);
    });
    //----------------------------------------------
    // change the style sheet

    function darkStyle(darkStyle) {
        let root = document.documentElement;
        if (darkStyle == true) {
root.style.setProperty('--color-blue','rgb(64,156,255)');
root.style.setProperty('--color-blue2','rgb(0,14,34)');
root.style.setProperty('--color-green','rgb(48, 209, 88)');
root.style.setProperty('--color-indigo','rgb(94,92,230)');
root.style.setProperty('--color-orange','rgb(255,159,10)');
root.style.setProperty('--color-pink','rgb(255,55,95)');
root.style.setProperty('--color-purple','rgb(191,90,242)');
root.style.setProperty('--color-red','rgb(255,69,58)');
root.style.setProperty('--color-teal','rgb(100,210,255)');
root.style.setProperty('--color-yellow','rgb(255,214,10)');
root.style.setProperty('--color-gray','rgb(142,142,147)');
root.style.setProperty('--color-gray2','rgb(99,99,102)');
root.style.setProperty('--color-gray3','rgb(72,72,74)');
root.style.setProperty('--color-gray4','rgb(58,58,60)');
root.style.setProperty('--color-gray5','rgb(44,44,46)');
root.style.setProperty('--color-gray6','rgb(28,28,30)');
root.style.setProperty('--color-white','rgb(31,32,34)');
root.style.setProperty('--color-bouton','rgb(105,106,108)');
root.style.setProperty('--color-boutonSelect','rgb(199,200,202)');
root.style.setProperty('--color-nav','rgb(60,61,64)');
root.style.setProperty('--color-menu','rgb(49,56,67)');
root.style.setProperty('--color-write','rgb(236,238,240)');
            return false;
        } else {
root.style.setProperty('--color-blue','rgb(0,122,255)');
root.style.setProperty('--color-blue2','rgb(217,235,255)');
root.style.setProperty('--color-green','rgb(52,199,89)');
root.style.setProperty('--color-indigo','rgb(88,86,214)');
root.style.setProperty('--color-orange','rgb(255,149,0)');
root.style.setProperty('--color-pink','rgb(255,45,85)');
root.style.setProperty('--color-purple','rgb(175,82,222)');
root.style.setProperty('--color-red','rgb(255,59,48)');
root.style.setProperty('--color-teal','rgb(90,200,250)');
root.style.setProperty('--color-yellow','rgb(255,204,0)');
root.style.setProperty('--color-gray','rgb(142,142,147)');
root.style.setProperty('--color-gray2','rgb(174,174,178)');
root.style.setProperty('--color-gray3','rgb(199,199,204)');
root.style.setProperty('--color-gray4','rgb(209,209,214)');
root.style.setProperty('--color-gray5','rgb(229,229,234)');
root.style.setProperty('--color-gray6','rgb(242,242,247)');
root.style.setProperty('--color-white','rgb(255,255,255)');
root.style.setProperty('--color-bouton','rgb(246,246,246)');
root.style.setProperty('--color-boutonSelect','rgb(105,106,106)');
root.style.setProperty('--color-nav','rgb(217,217,217)');
root.style.setProperty('--color-menu','rgb(227,228,229)');
root.style.setProperty('--color-write','rgb(36,40,45)');
            return true;
        };

    };

    var varStyle = false;
    darkStyle(varStyle);

    $("#styleCSS").click(function() {
        if (varStyle == false) {
            darkStyle(varStyle);
            varStyle = true;
        } else {
            darkStyle(varStyle);
            varStyle = false;
        };
    });

// dossier ; sous dossier; fichier; general; r; sas; python
content = [
['company',null,'animateur','1','0','0','0'],
['company',null,'MOA-MOE','1','0','0','0'],
['company',null,'job-interview','1','0','0','0'],
['database',null,'data-warehouse','1','0','0','0'],
['database',null,'json','1','0','0','0'],
['database',null,'sql','1','0','0','0'],
['english',null,'verbe','1','0','0','0'],
['microsoft',null,'excel','1','0','0','0'],
['microsoft',null,'outlook','1','0','0','0'],
['microsoft',null,'word','1','0','0','0'],
['programming',null,'java','1','0','0','0'],
['programming',null,'python','1','0','0','0'],
['projects',null,'raspberry-wifi','1','0','0','0'],
['statistique','data-mining','ACM','1','1','1','0'],
['statistique','data-mining','ACP','1','1','1','0'],
['statistique','data-mining','AFC','1','1','1','0'],
['statistique','data-mining','ANOVA','1','1','1','0'],
['statistique','data-mining','ARMA','1','0','0','0'],
['statistique','data-mining','CAH','1','1','1','0'],
['statistique','data-mining','CDH','1','0','0','0'],
['statistique','data-mining','SVM','1','1','0','0'],
['statistique','data-mining','analyse-discriminante','1','1','1','0'],
['statistique','data-mining','arbre-de-decision','1','1','1','0'],
['statistique','data-mining','boosting','1','0','0','0'],
['statistique','data-mining','carte-auto-adaptative','1','0','0','0'],
['statistique','data-mining','centre-mobiles','1','0','1','0'],
['statistique','data-mining','centroide','1','0','1','0'],
['statistique','data-mining','classificateur-baysien','1','1','0','0'],
['statistique','data-mining','cluestering-variables','1','0','1','0'],
['statistique','data-mining','esperance-maximisation','1','0','1','0'],
['statistique','data-mining','foret-aleatoire','1','1','0','0'],
['statistique','data-mining','lissage-exponentiel','1','0','0','0'],
['statistique','data-mining','perceptron','1','0','0','0'],
['statistique','data-mining','predire-evaluer','0','1','0','0'],
['statistique','data-mining','probleme-correlation','1','0','0','0'],
['statistique','data-mining','regression-lineaire','1','0','1','0'],
['statistique','data-mining','regression-logistique','1','1','1','0'],
['statistique','data-mining','reseaux-neurones','1','1','0','0'],
['statistique','data-mining','serie-temporelle-simple','0','1','0','0'],
['statistique','data-mining','serie-temporelle','1','0','0','0'],
['statistique','methode','cluestering-sans-cible','1','0','0','0'],
['statistique',null,'automatiser','0','1','1','0'],
['statistique',null,'carte','0','1','0','0'],
['statistique',null,'classification','1','0','0','0'],
['statistique',null,'deploy-Rshinny-shinyapps','1','0','0','0'],
['statistique',null,'dictionnaire-statistique','1','0','0','0'],
['statistique',null,'formater-donnees','0','1','1','0'],
['statistique',null,'graphiques','0','1','1','0'],
['statistique',null,'manipuler-donnees','0','1','1','0'],
['statistique',null,'reduction-dimensions','1','0','0','0'],
['statistique',null,'statistique-descriptive','0','0','1','0'],
['statistique',null,'tableau-de-bord','1','0','0','0'],
['statistique',null,'tests','1','0','1','0'],
['unix',null,'bash','1','0','0','0'],
['unix',null,'folders-linux','1','0','0','0'],
['unix',null,'shell','1','0','0','0'],
['unix',null,'vim','1','0','0','0'],
['web',null,'css','1','0','0','0'],
['web',null,'html','1','0','0','0'],
['web',null,'js','1','0','0','0'],
['web',null,'php','1','0','0','0']];

function transTable(data) {
  var colNb =  data[0].length;
  var newData = new Array(colNb);
  for(var j=0; j<colNb; j++){
    newData[j] = [];
    for(var i=0; i<data.length; i++){
      newData[j][i] = data[i][j];
    };
  };
return newData;
};

content = transTable(content);

function loadContenu(url) {
  var aPromise = fetch(url);
  // Work with Promise object:
  aPromise
  .then(function(response) {
  console.log("OK! Server returns a response object:");
  console.log(response);
  
  if(!response.ok)  {
  throw new Error("HTTP error, status = " + response.status);
  }
  response.text()
  .then(function(myText) {
  document.getElementById('contenu').innerHTML = marked(myText);
  })
  .catch(function(error) {
  // Never happened.
  });
  })
  .catch(function(error)  {
  console.log("Noooooo! Something error:");
  // Network Error!
  console.log(error);
  });
};

var mementoMenuHtml = "";
var classe = "";

var menu = new Array();
for (var i = 0; i <= content[0].length - 1; i++) {
  
  if (i==0) { 
    condition = true;
    condition2 = content[1][i] != null;
  } else { 
    condition = content[0][i]!=content[0][i-1];
    condition2 = content[1][i]!=content[1][i-1] && content[1][i]!=null
  };
  
  classe = content[0][i];

  if (condition) {
    mementoMenuHtml = mementoMenuHtml + "<div id="+content[0][i]+'><i class="fa fa-angle-right"></i>&ensp;'+content[0][i]+"</div>";
  };
  if (condition2) {
    mementoMenuHtml = mementoMenuHtml + '<div class="'+ classe +'" id="' + content[1][i] + '" style="display: none;">&ensp;<i class="fa fa-angle-right"></i>&ensp;'+content[1][i]+"</div>";
  };

  if (content[1][i] !== null ) {
    classe = classe + ' ' + content[1][i];
    libelle = '&ensp;&ensp;&ensp;&ensp;'+content[2][i];
  } else {
    libelle = '&ensp;&ensp;&ensp;'+content[2][i];
  };

  var langage = "";
  if (content[4][i] == 1) {langage = langage + '<span class="r">R</span>';};
  if (content[5][i] == 1) {langage = langage + '<span class="sas">SAS</span>';};
  if (content[6][i] == 1) {langage = langage + '<span class="python">pyt</span>';};

  mementoMenuHtml = mementoMenuHtml + '<div class="'+ classe +'" id=' + content[2][i]+ ' style="display: none;">'+ libelle + langage + "</div>";
};
document.getElementById('mementoMenu').innerHTML = mementoMenuHtml;

// ouvrir et fermer le menu

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var menu = content[0].filter( onlyUnique );
var menuSub = content[1].filter( onlyUnique );
menuSub = menuSub.filter(x => !!x);
menu = menu.concat(menuSub);

console.log(menu);

for (var i = 0; i <= menu.length - 1; i++) {
  $("#" + menu[i]).click(function() {
    menu = $(this)[0].id;
    console.log(menu);
    angle = $("#" + menu + " i");
    if (angle[0].className == 'fa fa-angle-down') {
      angle = $("#" + menu + " i");
      angle.removeClass('fa-angle-down');
      angle.addClass('fa-angle-right');
      valeur = 'none';
    } else {
      angle.removeClass('fa-angle-right');
      angle.addClass('fa-angle-down');
      valeur = 'block';
    };
    var elems = document.getElementsByClassName(menu);

    for (var i=0;i<elems.length;i+=1){
      if (document.getElementById(menu).className == "") {
        if ( (elems[i].className == menu | elems[i].className.indexOf(menu)==-1 | elems[i].className == menu + ' selection') & valeur == 'block' ) {
          elems[i].style.display = valeur;
        } else if (elems[i].className.indexOf(menu)>-1 & valeur == 'none') {
          elems[i].style.display = valeur;
        }
      } else {
        elems[i].style.display = valeur;
      }
    };
  });
}

// charger les pages
for (var i = 0; i <= content[0].length - 1; i++) {
  $( '#' + content[2][i] ).click( function() {
    if (document.getElementsByClassName("selection")[0] != null) {
      $('.selection').removeClass('selection');
    }
    $(this)[0].className = $(this)[0].className + " selection";

    var fichier;
    document.getElementById("titre").innerHTML=$(this)[0].id;
    for (var i = 0; i <= content[0].length - 1; i++) {
      if (content[2][i] == $(this)[0].id) {
        if (content[1][i] !== null) {
            fichier = content[0][i] + '/' + content[1][i];
          } else {
            fichier = content[0][i]
          };
          if (content[3][i] == 1) {
            fichier = fichier + '/' + content[2][i] + '.md';
          } else if (content[4][i] == 1) {
            fichier = fichier + '/' + content[2][i] + '_r.md';
          } else if (content[5][i] == 1) {
            fichier = fichier + '/' + content[2][i] + '_sas.md';
          } else if (content[6][i] == 1) {
            fichier = fichier + '/' + content[2][i] + '_sas.md';
          }
      }
    };
    url = 'https://raw.githubusercontent.com/gdemare/aide-memoire/master/' + fichier;
    loadContenu(url);
  });
      
};

// modifier
$( '#modifier' ).click( function() {
  if (document.getElementsByClassName("selection")[0] != null) {
    var selection = document.getElementsByClassName("selection")[0].id;
  var fichier;
  for (var i = 0; i <= content[0].length - 1; i++) {
    if (content[2][i] == selection) {
      if (content[1][i] !== null) {
        fichier = content[0][i] + '/' + content[1][i];
      } else {
        fichier = content[0][i]
      };
      if (content[3][i] == 1) {
        fichier = fichier + '/' + content[2][i] + '.md';
      } else if (content[4][i] == 1) {
        fichier = fichier + '/' + content[2][i] + '_r.md';
      } else if (content[5][i] == 1) {
        fichier = fichier + '/' + content[2][i] + '_sas.md';
      } else if (content[6][i] == 1) {
        fichier = fichier + '/' + content[2][i] + '_sas.md';
      }
    }
  }
  url = 'https://github.com/gdemare/aide-memoire/edit/master/' + fichier ;
  window.open(url);
  };
});

});