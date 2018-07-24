<!DOCTYPE html>

<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_select_db($conn, "equipment");
mysqli_query($conn, "set names utf8");	//以utf8讀取資料
$data = mysqli_query($conn, "SELECT * FROM light_equipment");

?>


<html>
	<meta charset = utf-8>
	<title>音響器材</title>
	<link rel = "stylesheet" type = "text/css" href = "css/equipment.css?ver=<?php echo time(); ?>">
	<link rel = "stylesheet" type = "text/css" href = "css/common.css">
	
	<script>
		function start(){
			window.alert("還沒開始做唷");
		}
		
		window.addEventListener("load", start, false);
	</script>
</head>
<body>
	<div id = "list">
		<ul>
			<li><a href = "index.php">首頁</a></li>
			<li><a href = "light.php">燈光器材</a></li>
			<li><a href = "sound.php">音響器材</a></li>
			<li><a href = "borrowing_table.php">器材單</a></li>
			<li><a href = "instruction.php">說明</a></li>
		</ul>
	</div>
	<div id = "main">
	</div>
</body>
</html>