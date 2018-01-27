<?php
	$conn = mysqli_connect("localhost","root","", "dev6");

	$query = mysqli_query($conn,"SELECT * FROM funcionario");

	$row_query = mysqli_fetch_array($query);
	
		do{
			$id = $row_query['FUN_INT_ID'];
			$rede_social = mysqli_query($conn,"SELECT * FROM redesocial WHERE FUN_INT_ID = $id");
			$row_social = mysqli_fetch_array($rede_social);
		 ?>
				<div class="col-sm-4">
					<div class="thumbnail">
					    <img src="./imgs/<?php echo $row_query['FUN_STR_FOTO'] ?>" alt="<?php echo $row_query['FUN_STR_NOME'] ?>"/>
					    <div class="caption">
						    <h3><?php echo $row_query['FUN_STR_NOME'] ?></h3>
						    <hr class="equipeHr"/>
						    <p><?php echo $row_query['FUN_STR_CARGO'] ?></p>
						    <?php
						    if($row_social['SOC_STR_INSTAGRAM'] != ''){
						    ?>
						    <p><a href="<?php echo $row_social['SOC_STR_INSTAGRAM'] ?>" target="_blank"><span class="social"><img src="./imgs/instagram.svg"/></span></a>
						    <?php
							}
							if($row_social['SOC_STR_FACEBOOK'] != ''){
						    ?>
						    <a href="<?php echo $row_social['SOC_STR_FACEBOOK'] ?>" target="_blank"><span class="social"><img src="./imgs/facebook.svg"/></span></a>
						    <?php
							}if($row_social['SOC_STR_GITHUB'] != ''){
						    ?>
						    <a href="<?php echo $row_social['SOC_STR_GITHUB'] ?>" target="_blank"><span class="social"><img src="./imgs/github.svg"/></span></a></p>
						    <?php
							}
						    ?>
						</div>
					</div>
				</div>
		<?php
		}while($row_query = mysqli_fetch_array($query));
?>