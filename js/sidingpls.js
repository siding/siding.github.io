function randomBG(){
  var h = Math.floor(360*Math.random());
  var s = 50+20*Math.random();
  var l = 30+20*Math.random();

  var col = 'hsl('+h+','+s+'%,'+l+'%)';
  document.body.style.background = col;
}

var currentTimer = null;
function stopTimer() {
  if (currentTimer != null) {
    clearInterval(currentTimer);
    currentTimer = null;
  }
}
function runTask(task, frequencyInMilliseconds) {
  var taskTime = frequencyInMilliseconds ? frequencyInMilliseconds : defaultTaskTimer;
  stopTimer();

  task();
  currentTimer = setInterval(function() {
    task();
  }, taskTime);
}

function registerListeners(){
  $form = $('form[id=LoginForm]');
  $usr = $('input[id=login]');
  $pwd = $('input[id=passwd]');

  $form.submit(function(e) {
    usr_l = $usr.val().length;
    pwd_l = $pwd.val().length;


    if (usr_l<1) {
      alert('derp, usr pls');
    }
    else if (pwd_l<1) {
      alert('derp, pwd pls');
    }
    else {
      $('iframe').bind('load', function() {
        window.location.replace('https://intrawww.ing.puc.cl/siding/dirdes/ingcursos/cursos/index.phtml?per_lista_cursos=22_2016&acc_inicio=mis_cursos');
      });


      runTask(randomBG, 300);
      $div = $('div[class=control-group]').hide(600);
      $div = $('div[class=loading]').show(600);
    }

  });

  $('body').keydown(function(event) {
    if(Math.random()>0.4)
      randomBG();
  });
}




document.addEventListener('page:load', function(){
  registerListeners();
});
$(document).ready(function(){
  randomBG();
  registerListeners();
});
