<?php
	require 'jwt.php'; 
	$token = $_GET['token'];

	$json = JWT::decode($token, 'secret_key', true);
	echo json_encode($json);
 ?>