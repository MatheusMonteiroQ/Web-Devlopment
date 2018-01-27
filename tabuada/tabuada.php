<html>
<head>
	<title>Oi</title>
		<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
		<link rel="stylesheet" type="text/css" href="css/estilo.css" />
	</head>
<body>
<?php
	for($n = 1 ; $n <=10 ; $n++){
	?>
	<div id="edit">
	<?php
	for($i = 0 ; $i <=10 ; $i++){
	
	echo "$n x $i = " . ($n*$i)."<br>";
	
	} ?>
	</div>
	
	<?php
	} ?>
	</body>
</html>
	