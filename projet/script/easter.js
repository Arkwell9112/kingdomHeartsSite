// IDEA: Script par Edouard Bergé, permettant l'accès à l'easter egg

var currentPos = 0;

// IDEA: Fonction permettant de savoir si la click est dans le bonne ordre ou non
function checkIndex(pos){
  if((pos - 1) == currentPos){
    currentPos = pos;
  } else {
    currentPos = 0;
  }

  checkEaster();
}

// IDEA: Fonction permettant de vérifier si il s'agit du dernier click, si oui l'utilisateur est redirigé vers la page de l'easter egg
function checkEaster(){
  if(currentPos == 5){
    window.location.href = "../page/easter_00000.html";
  }
}
