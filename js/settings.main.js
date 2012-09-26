$(function() {

  $("#save-button").click(function(e) {
    chameleon.close(true); 
    return false;
  });
  
  $("#cancel-button").click(function(e) {
    chameleon.close(false);
    return false;
  });

});
