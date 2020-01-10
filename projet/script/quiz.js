// IDEA: Script par Edouard Bergé, permettant de compter et d'afficher le résultat du quizz

window.addEventListener('load', function(){
  document.getElementById('subbutton').addEventListener('click', onEnd);
});

// IDEA: Quand on click sur le bouton répondre on vérifie les réponses pour chaque question
function onEnd(){
  var cases = document.forms[0].elements;
  var answer = 0;
  var monstres = 0;
  var acco = 0;
  for(var index in cases){
    switch (cases[index].name){
      case 'principal':
      if(cases[index].value == 'Sora'){
        answer++;
      }
      break;

      case 'monstres':
      if((cases[index].value == 'embleme' || cases[index].value == 'matrice') && cases[index].checked == true){
        monstres++;
      } else if((cases[index].value == 'tenebre' || cases[index].value == 'lumiere') && cases[index].checked == true){
        monstres--;
      }
      break;

      case 'acco':
      if((cases[index].value == 'dingo' || cases[index].value == 'donald') && cases[index].checked == true){
        acco++;
      } else if((cases[index].value == 'roxas' || cases[index].value == 'zero') && cases[index].checked == true){
        acco--;
      }
      break;

      case 'simili':
      if(cases[index].value == 'ame' && cases[index].checked == true){
        answer++;
      }
      break;

      case 'perso':
      if(cases[index].value == '3' || cases[index].value == 'trois'){
        answer++;
      }
      break;

      case 'studio':
      if(cases[index].value == 'enix' && cases[index].checked == true){
        answer++;
      }
      break;

      case 'createur':
      if(cases[index].value == 'Nomura'){
        answer++;
      }
      break;

      case 'mouse':
      if(cases[index].value == '2' && cases[index].checked == true){
        answer++;
      }
      break;

      case 'organisation':
      if(cases[index].value == '13' || cases[index].value == 'XIII'){
        answer++;
      }
      break;

      case 'note':
      if(cases[index].value == 'oui' && cases[index].checked == true){
        answer++;
      }
      break;
    }
  }
  if(monstres == 2){
    answer++;
  }

  if(acco == 2){
    answer++;
  }
  var win = 'Bravo ! Vous avez obtenu 10/10 ! Pour accéder à l\'easter il faut vous rendre sur la page des mondes disney et il vous faudra ensuite suivre la piste des princesses...';
  var loose = 'Dommage ! Vous avez obtenu un score de ' + answer + '/10. Il va falloir faire mieux !';

  // IDEA: On renvoit du texte en fonction du nombre de bonnes réponses
  if(answer == 10){
    document.getElementById('result').innerHTML = win;
  } else {
    document.getElementById('result').innerHTML = loose;
  }
}
