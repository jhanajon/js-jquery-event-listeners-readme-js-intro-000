//define functions here

$(document).ready(function(){
$(getIt)
$(frameIt)
});

function getIt() {
$( "p" ).click(function() {
  alert( "Hey!" );
});
}

function frameIt() {
  $( "img" ).load(function() {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if(key.which == 71){
      alert('G was pressed');
    }
  });
}


