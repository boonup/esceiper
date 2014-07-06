<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Esceiper</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->

    <link href="css/main.css" rel="stylesheet">
  </head>
  <body>
    <!--[if lt IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
  
    	<div class='container'>
    		<h1>Esceiper</h1>
    		<p class='intro'>
	    		Escaping HTML the right way is always kinda tricky. You can't remember that one specific character, or you just want a machine to put in your text and does the escaping for you. Use <strong>Esceiper</strong>
    		</p>
    		
    		<div class='app'>
    			<form method="post" action='engine/engine.php' id='input-form'>
    				<textarea name="input" class="input"></textarea>
    				<button class="submit" type='submit'> Escape! </button>
    			</form>
    			<textarea class='result'></textarea>
    		</div>
    		
    		<div class='info'>
    			<p>Hope you're enjoying this tool. You can contribute on <a href="#">Github</a></p>
    		</div>
    	</div>
    	 
    <script src="js/vendor/vendor.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
