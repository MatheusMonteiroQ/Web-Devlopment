<?php
	$servidor="localhost";
	$usuario="root";
	$senha="123456";
	$banco="etec";
	
	$conn=mysqli_connect($servidor, $usuario, $senha, $banco) or die();
	
	$nome=$_POST['txt_nome'];
	$ra=$_POST['txt_ra'];
	$email=$_POST['txt_email'];
	$username=$_POST['txt_usuario'];
	$pass=$_POST['txt_senha'];
	
	$sql=mysqli_query($conn,"insert into tbl_alunos (nome_tbl_aluno,ra_tbl_aluno,email,username_tbl_aluno,pass_tbl_aluno)
	values ('$nome', $ra, '$email', '$username', '$pass')");
	
	header("location:index_2.php");
?>