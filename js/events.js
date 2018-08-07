//define functions here

$(document).ready(function(){
$(getIt)
});

function getIt() {
$( "p" ).click(function() {
  alert( "Hey!" );
});
}

function frameIt() {
  
}

$( "img" ).load(function() {
  $("img").css({'border:1px solid red;'});

});