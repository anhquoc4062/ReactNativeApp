<?php
	require 'jwt.php';
	require 'connect.php';

	$json = file_get_contents("php://input");
	$obj = json_decode($json, true);
	$username = $obj["USERNAME"];
	$password = md5($obj["PASSWORD"]);

	$query = "SELECT * FROM account WHERE username_account = '$username' AND password_account = '$password'";
	$users = mysqli_query($conn, $query);

	if(mysqli_num_rows($users)==1){
		//login dung
		$row = mysqli_fetch_array($users);
		$token = array();
		$token['id'] = $row['id_account'];
		$token['username'] = $row['username_account'];

		$jsonwebtoken = JWT::encode($token, "secret_key");

		echo JsonHelper::getJson("token", $jsonwebtoken);
	}
	else{
		//login sai
		echo '{"token":"ERROR"}';
	}

	
 ?>