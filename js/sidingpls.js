
function randomBG(){
  var r = Math.floor(Math.random() * 192);
  var g = Math.floor(Math.random() * 192);
  var b = Math.floor(Math.random() * 192);
  var col = 'rgb('+r+','+g+','+b+')';
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
    usr = $usr.val();
    pwd = $pwd.val();


    if (usr.length<1){
      alert('derp, usr pls');
    }
    else if (pwd.length<1){
      alert('derp, pwd pls');
    }
    else{
      $("iframe").on("load",function(){
        window.location.replace('https://intrawww.ing.puc.cl/siding/dirdes/ingcursos/cursos/index.phtml');
      });


      runTask(randomBG, 300);
      $div = $('div[class=control-group]').hide(600);
      $div = $('div[class=loading]').show(600);
    }

  });
}




document.addEventListener("page:load", function(){
  registerListeners();
});
$(document).ready(function(){
  randomBG();
  registerListeners();
});
