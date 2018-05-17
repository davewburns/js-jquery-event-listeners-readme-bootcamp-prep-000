//define functions here

$(document).ready(function(){

function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('.img').addClass('tasty');
  });
}

function pressIt(){
  $('input');
}

function submitIt(){
  $('form').on('submit'), function() {
    alert('Your form is going to be submitted now.');
    
  };
}

// call functions here

});
