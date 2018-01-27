<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			$servidor="localhost";
			$usuario="root";
			$senha="123456";
			$banco="etec";
			
			$conn=mysqli_connect($servidor, $usuario, $senha, $banco);
			
			$sql=mysqli_query($conn, "SELECT * from tbl_alunos");
		?>
		<table border="1">
		<tr>
			<th>Nome</th>
			<th>E-mail</th>
			<th>RA</th>
			<th>Usuário</th>
			<th>Senha</th>
			<th colspan="2">Ação</th>
		</tr>
		<?php
			while($res=mysqli_fetch_array($sql)){
		?>
		<tr>
			<td><?php echo $res['nome_tbl_aluno']; ?></td>
			<td><?php echo $res['email']; ?></td>
			<td><?php echo $res['ra_tbl_aluno']; ?></td>
			<td><?php echo $res['username_tbl_aluno']; ?></td>
			<td><?php echo $res['pass_tbl_aluno']; ?></td>
			<td><a href="fupdate.php?id=<?php echo $res['id_tbl_aluno']; ?>">Editar</a></td>
			<td><a href="delete.php?id=<?php echo $res['id_tbl_aluno']; ?>">Excluir</a></td>
		</tr>
		<?php } ?>
		</table>
	</body>
</html>
			