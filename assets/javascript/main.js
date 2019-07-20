
var removeParticleBox = function(){
    var parBox = $("canvas")
    var attr = parBox.attr('width');
    if(parBox.attr == "80px"){
        $(this).hide()
    }
};

removeParticleBox();

// ----------Function to turn light bulb picture on and off ----------------//
// $( "#bulbOff" ).hover(
//     function() {
//       $( this ).append( $( "<span> ***</span>" ) );
//     }, function() {
//       $( this ).find( "span:last" ).remove();
//     }
//   );
   
//   $( "li.fade" ).hover(function() {
//     $( this ).fadeOut( 100 );
//     $( this ).fadeIn( 500 );
//   });

function activateFilterAnimation() {
    $('#bwBulb').toggleClass('animated');
  }
  
  $('#resume').on('click', activateFilterAnimation);