// IDEA: Script par Edouard Bergé, script permettant le défilement des images dans la galerie et l'accès direct à une image par les petits boutons

var nbPicture = 10;
var lastIndex = 1;
var nextIndex = 1;

window.addEventListener('load', function(){

  // IDEA: On récupère les éléments dont on a besoin et on positiionne les fléches correctement
  var droite = document.getElementById('right');
  var gauche = document.getElementById('left');
  var galerie = document.getElementById('galerie');
  var butttons = document.getElementById('buttons');
  var value = (galerie.clientHeight/2) - (droite.clientHeight/2);
  droite.style.top = value + 'px';
  value = (galerie.clientHeight/2) - (gauche.clientHeight/2);
  gauche.style.top = value + 'px';

  // IDEA: On insére un nombre de boutons égal au nombre d'images à charger
  // IDEA: On précharge ensuite les images sinon la galerie est extrêmement lente pour passer d'une image à une autre
  for(let i=1; i<=nbPicture; i++){
    buttons.innerHTML = buttons.innerHTML + '<button id=button' + i + ' class=button type=button><img src=../img/inactive.png alt="Image de sélection de l\'image en cours" id=' + i + '></button>';
    var currentImage = new Image();
    currentImage.src = "../galerie/" + i + ".jpg";
}
  // IDEA: On positionne la div des boutons
  value = (galerie.clientWidth/2) - (buttons.clientWidth/2);
  buttons.style.left = value + 'px';

  // IDEA: On attache à chaque bouton un listener
  for(let i=1; i<=nbPicture; i++){
    document.getElementById('button' + i).addEventListener('click', presetPos.bind(i));
  }

  // IDEA: On attache les listener au deux fléches
  document.getElementById('right').addEventListener('click', nextPos.bind(true));
  document.getElementById('left').addEventListener('click', nextPos.bind(false));
  setPos();
});

// IDEA: fonction permettant de faire avancer ou reculer l'index sans dépasser les limites
function nextPos(){
  lastIndex = nextIndex;
  if(this == true){
    nextIndex++;
    if(nextIndex > nbPicture){
      nextIndex = 1;
    }
  } else {
    nextIndex--;
    if(nextIndex < 1){
      nextIndex = nbPicture;
    }
  }
  setPos();
}

// IDEA: Fonction permettant d'appliquer les changements en fonction de l'index courant
function setPos(){
  document.getElementById(lastIndex).setAttribute('src', '../img/inactive.png');
  document.getElementById(nextIndex).setAttribute('src', '../img/active.png');
  document.getElementById('image').setAttribute('src', '../galerie/' + nextIndex + '.jpg');
}

// IDEA: Fonction permettant de set directement un index
function presetPos(){
  lastIndex = nextIndex;
  nextIndex = this;
  setPos();
}
