(function( window, document, undefined ) {

  'use strict';
  
  var form = document.getElementById('input-form');
  var input_area = document.getElementsByClassName('input')[0];
  var output_area = document.getElementsByClassName('result')[0];
  var submit_button = document.getElementsByClassName('submit')[0];

  on( form, 'submit', function( event ) {

    var input_val = input_area.value;
    
    if( !! input_val.trim() ) {

      var request = new XMLHttpRequest();
      request.open('POST', 'engine/engine.php', true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

      request.onload = function() {
        output_area.value = request.responseText;  
      };

      request.send("input="+input_val); 

    }   
    
    event.preventDefault();
  });  	

})(this, document);
