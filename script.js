$(document).ready(function() {
//----------------------------------------------
// dossier ; sous dossier; fichier; general; r; sas; python
content = [
['company',null,'animateur',1,0,0,0],
['company',null,'job-interview',1,0,0,0],
['company',null,'MOA-MOE',1,0,0,0],
['database',null,'business-object',1,0,0,0],
['database',null,'data-warehouse',1,0,0,0],
['database',null,'json',1,0,0,0],
['database',null,'sql',1,0,0,0],
['database',null,'talend',1,0,0,0],
['english',null,'verbe',1,0,0,0],
['microsoft',null,'excel',1,0,0,0],
['microsoft',null,'outlook',1,0,0,0],
['microsoft',null,'word',1,0,0,0],
['programming',null,'java',1,0,0,0],
['programming',null,'python',1,0,0,0],
['projects',null,'raspberry-wifi',1,0,0,0],
['statistique','data-mining','ACM',1,1,1,0],
['statistique','data-mining','AFC',1,1,1,0],
['statistique','data-mining','ANOVA',1,1,1,0],
['statistique','data-mining','ARMA',1,0,0,0],
['statistique','data-mining','CAH',1,1,1,0],
['statistique','data-mining','CDH',1,0,0,0],
['statistique','data-mining','SVM',1,1,0,0],
['statistique','data-mining','analyse-discriminante',1,1,1,0],
['statistique','data-mining','arbre-de-decision',1,1,1,0],
['statistique','data-mining','boosting',1,0,0,0],
['statistique','data-mining','carte-auto-adaptative',1,0,0,0],
['statistique','data-mining','centre-mobiles',1,0,1,0],
['statistique','data-mining','centroide',1,0,1,0],
['statistique','data-mining','classificateur-baysien',1,1,0,0],
['statistique','data-mining','cluestering-variables',1,0,1,0],
['statistique','data-mining','esperance-maximisation',1,0,1,0],
['statistique','data-mining','foret-aleatoire',1,1,0,0],
['statistique','data-mining','lissage-exponentiel',1,0,0,0],
['statistique','data-mining','perceptron',1,0,0,0],
['statistique','data-mining','predire-evaluer',0,1,0,0],
['statistique','data-mining','probleme-correlation',1,0,0,0],
['statistique','data-mining','regression-lineaire',1,0,1,0],
['statistique','data-mining','regression-logistique',1,1,1,0],
['statistique','data-mining','reseaux-neurones',1,1,0,0],
['statistique','data-mining','serie-temporelle-simple',0,1,0,0],
['statistique','data-mining','serie-temporelle',1,0,0,0],
['statistique','methode','cluestering-sans-cible',1,0,0,0],
['statistique',null,'automatiser',0,1,1,0],
['statistique',null,'carte',0,1,0,0],
['statistique',null,'classification',1,0,0,0],
['statistique',null,'deploy-Rshinny-shinyapps',1,0,0,0],
['statistique',null,'dictionnaire-statistique',1,0,0,0],
['statistique',null,'formater-donnees',0,1,1,0],
['statistique',null,'graphiques',0,1,1,0],
['statistique',null,'manipuler-donnees',0,1,1,0],
['statistique',null,'reduction-dimensions',1,0,0,0],
['statistique',null,'statistique',1,0,0,0],
['statistique',null,'statistique-descriptive',0,1,1,0],
['statistique',null,'tableau-de-bord',1,0,0,0],
['statistique',null,'tests',0,1,1,0],
['unix',null,'bash',1,0,0,0],
['unix',null,'folders-linux',1,0,0,0],
['unix',null,'shell',1,0,0,0],
['unix',null,'vim',1,0,0,0],
['web',null,'css',1,0,0,0],
['web',null,'html',1,0,0,0],
['web',null,'js',1,0,0,0],
['web',null,'php',1,0,0,0],
];

// transposer le tableau
var contentTrans = new Array(content[0].length);
for(var i=0; i<content[0].length; i++){
  contentTrans[i] = [];
  for(var j=0; j<content.length; j++){
    contentTrans[i][j] = content[j][i];
  };
};
content = contentTrans;

// creation de l'url
var dossier;
content[content.length] = [];
for (var i = 0; i <= content[0].length - 1; i++) {
  if (content[1][i] != null) {
    dossier = content[0][i] + '/' + content[1][i];
  } else {
    dossier = content[0][i]
  };
  content[content.length-1][i] = dossier + '/' + content[2][i];
};

// calcul de la position des éléments 
var hauteurNav = document.getElementsByTagName("nav")[0].offsetHeight + 'px',
  largeurMenu = document.getElementById("menu").offsetWidth - 1 + 'px';
console.log(largeurMenu);
document.getElementById("page").style.setProperty("padding-top", hauteurNav);
document.getElementsByTagName("nav")[0].style.setProperty("left", largeurMenu);
document.getElementById("page").style.setProperty("left", largeurMenu);

// changer les couleurs
$("#styleCSS").click( function() {
  console.log($(this)[0].className);
  if ($(this)[0].className.indexOf("dark") == -1) {
    $(this).addClass("dark");
    document.getElementById('page').style.boxShadow = "none";
  } else {
    $(this).removeClass("dark");
    document.getElementById('page').style.boxShadow = "-5px 0px 10px rgb(243,243,243)";
  }
  dark();
});
dark();
function dark() {
  var root = document.documentElement;
  if ( document.getElementById("styleCSS").className.indexOf("dark") != -1 ) {
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
    root.style.setProperty('--color-boiteH2','rgb(209,209,214)');
    root.style.setProperty('--color-write','rgb(236,238,240)');
    root.style.setProperty('--color-bouton','rgb(44,44,46)');
    root.style.setProperty('--color-nav','rgb(55,54,63)');
    root.style.setProperty('--color-boite','rgb(33,32,42)');
    root.style.setProperty('--color-fond','rgb(33,32,42)');
    root.style.setProperty('--color-titre','rgb(99,99,102)');
    root.style.setProperty('--color-degrade1','rgb(0,122,255)');
    root.style.setProperty('--color-degrade2','rgb(64,156,255)');
    root.style.setProperty('--color-fondMenu','rgb(29,27,38)');
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
    root.style.setProperty('--color-boiteH2','rgb(50,50,54)');
    root.style.setProperty('--color-write','rgb(118,118,119)');
    root.style.setProperty('--color-bouton','rgb(232,232,232)');
    root.style.setProperty('--color-nav','rgb(255,255,255)');
    root.style.setProperty('--color-boite','rgb(255,255,255)');
    root.style.setProperty('--color-fond','rgb(247,247,250)');
    root.style.setProperty('--color-titre','rgb(180,185,190)');
    root.style.setProperty('--color-degrade1','rgb(0,179,255)');
    root.style.setProperty('--color-degrade2','rgb(76,216,254)');
    root.style.setProperty('--color-fondMenu','rgb(247,247,250)');
  };
};

// charger le contenu des pages
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

// contenu du menu
var menuHtml = "";
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
    menuHtml = menuHtml + '<h2>'+content[0][i].replace(/-/g,' ')+"</h2>";
  };
  if (condition2) {
    menuHtml = menuHtml + '<div id="'+ content[1][i] + '" ><i class="fas fa-angle-right"></i>'+content[1][i].replace(/-/g,' ')+"</div>";
  };

  var langage = "";
  if (content[4][i] == 1) {langage = langage + '<span class="r"></span>';};
  if (content[5][i] == 1) {langage = langage + '<span class="sas"></span>';};
  if (content[6][i] == 1) {langage = langage + '<span class="python"></span>';};

  if (content[1][i] !== null ) {
    classe = content[1][i];
    libelle = '&ensp;'+content[2][i].replace(/-/g,' ');
    menuHtml = menuHtml + '<div class="'+ classe +'" id=' + content[2][i]+ ' style = "display:none;">'+ libelle + langage + "</div>";
  } else {
    libelle = content[2][i].replace(/-/g,' ');
    menuHtml = menuHtml + '<div id=' + content[2][i]+ '>'+ libelle + langage + "</div>";
  };
};
document.getElementById('menu').innerHTML = menuHtml;

// animation menu déroulant
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var menuSub = content[1].filter( onlyUnique );
menuSub = menuSub.filter(x => !!x);
console.log(menuSub);
for (var i = 0; i <= menuSub.length - 1; i++) {
  $("#" + menuSub[i]).click(function() {
    menuSub = $(this)[0].id;
    angle = $("#" + menuSub + " i");
    console.log(angle[0].className);
    if (angle[0].className == 'fas fa-angle-down') {
      console.log('oke'); 
      angle.removeClass('fa-angle-down');
      angle.addClass('fa-angle-right');
      valeur = 'none';
    } else {
      angle.removeClass('fa-angle-right');
      angle.addClass('fa-angle-down');
      valeur = 'flex';
    };
    var elems = document.getElementsByClassName(menuSub);

    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = valeur;
    };
  });
}

var pageActuel = [];
var bouton = [  ['general', 'r', 'sas', 'python2'],
                ['', '_r', '_sas', '_python']];

var chaine = content[0][10];
console.log(content[0][10].replace('-', ' '));
// charger les pages
for (var i = 0; i <= content[0].length - 1; i++) {
  $( '#' + content[2][i] ).click( function() {
  if (document.getElementsByClassName("selection")[0] != null) {
    $('.selection').removeClass('selection');
  };
  $(this)[0].className = $(this)[0].className + " selection";

  for (var i = 0; i <= content[0].length - 1; i++) {
    if (content[2][i] == $(this)[0].id) {
      for (var j = 0; j <= content.length - 1; j++) {
        pageActuel[j] = content[j][i];
      };
    }
  };

  document.getElementById("section").innerHTML=pageActuel[0].replace(/-/g,' ');
  document.getElementById("titre").innerHTML=pageActuel[2].replace(/-/g,' ');
        console.log(pageActuel);
        for (var j = 0; j <= bouton[0].length - 1; j++) {
          if (pageActuel[3+j] == 1) {
            document.getElementById(bouton[0][j]).style.display = "flex";
            $( '#' + bouton[0][j] ).click( function() {
              for (var j = 0; j <= bouton[0].length - 1; j++) {
                if ($(this)[0].id == bouton[0][j]) {  
                  var extension = bouton[1][j];
                }; 
              }
              console.log(j + bouton[1][j]);
                url = 'https://raw.githubusercontent.com/gdemare/aide-memoire/master/' + pageActuel[7] + extension + '.md';
              loadContenu(url);
            });
          } else {
            document.getElementById(bouton[0][j]).style.display = "none";
          };
        };
        var extension;
        if (pageActuel[3] == 1) {
          extension = '.md';
        } else if (pageActuel[4] == 1) {
          extension = '_r.md';
        } else if (pageActuel[5] == 1) {
          extension = '_sas.md';
        } else if (pageActuel[6] == 1) {
          extension = '_sas.md';
        };
        pageActuel.extension = extension;
    
    url = 'https://raw.githubusercontent.com/gdemare/aide-memoire/master/' + pageActuel[7] + pageActuel.extension;
    loadContenu(url);
  });
};

// modifier
$( '#modifier' ).click( function() {
  if (document.getElementsByClassName("selection")[0] != null) {
    url = 'https://github.com/gdemare/aide-memoire/edit/master/' + pageActuel[7] + pageActuel.extension ;
    window.open(url);
  };
});


});
