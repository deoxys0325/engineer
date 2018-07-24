<!DOCTYPE html>
<html>

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

//mysqli_close($conn);
?>


<head>
	<meta charset = utf-8>
	<title>燈光器材</title>
	<link rel = "stylesheet" type = "text/css" href = "css/equipment.css?ver=<?php echo time(); ?>">
	<link rel = "stylesheet" type = "text/css" href = "css/common.css">
	<!--add jQuery-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
	<script src = "light.js"></script>
	<script src = "javascript/common.js"></script>
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
	<form action="borrowing_table.php" method="POST">
		<div>
		<table>
			<caption>燈光器材</caption>
			<thead>
				<tr style = "background-color:lightgray ">
					<th class = "center" style = "width: 100px;">分類</th>
					<th class = "center" style = "width: 50px;">加入</th>
					<th class = "center">名稱</th>
					<th class = "center" style = "width: 50px;">數量</th>
					<th class = "center">備註</th>
				</tr>
			</thead>
			<tbody>
			
				<?php
				$category = "";
				for($i = 1;$i <= mysqli_num_rows($data);$i++){
					$rs = mysqli_fetch_row($data);					
					
					if($rs[1] != $category && $i != 1){
						?>
						<div>
							<tr>
								<td style = "background-color:black;"></td>
								<td style = "background-color:black;"></td>
								<td style = "background-color:black;"></td>
								<td style = "background-color:black;"></td>
								<td style = "background-color:black;"></td>
							</tr>
						</div>
						<?php
					}
					?>
					<tr>
						<th class = "category"><p class = "center">
							<?php
							if( $rs[1] != $category ) echo $rs[1];
							else echo "";
							?>
							</p>
						</th>
						<td><p class = "center"><input class="checkbox" type="checkbox" name=<?php echo "light_id".$rs[0] ?> value=<?php echo $rs[0] ?> ></p></td>
						<td class = "equipment_name"><p><?php echo $rs[2]?></p></td>
						<td class = "equipment_number"><p class = "center"><?php echo $rs[3]?></p></td>
						<td class = "ps"><p><?php echo $rs[4]?></p></td>
					</tr>
					<?php
					$category = $rs[1];
				}
				?>
				
			</tbody>
			<tfoot>
				
			</tfoot>
		
		</table>
		
		<div class = "button_div">
			<input type="submit" value="Submit">
		</div></div>		
	</form>
	<div>
		<p class = "top">
			<a id = "goTop">Go to top</a><br>
			<a id = "goTop2">Go to top</a>
		</p>
	</div>
</div>
</body>
</html>