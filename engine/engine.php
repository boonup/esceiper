<?php 
	
	class esceiper {
		
		static public function escape( $text ) {
			
			return htmlentities($text);			
		}
		
	}
	
?>
<?php echo esceiper::escape( $_POST[ 'input' ] ); ?>
