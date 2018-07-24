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

//mysqli_close($conn);
?>

<html>
<head>
	<meta charset = utf-8>
	<title>借用表</title>
	<link rel = "stylesheet" type = "text/css" href = "css/borrowing_table.css?ver=<?php echo time(); ?>">
	<link rel = "stylesheet" type = "text/css" href = "css/common.css?ver=<?php echo time(); ?>">
	<script src = "borrowing_table.js?ver=<?php echo time(); ?>"></script>
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
	<div class = "main">
	<!--table start-->
	
		<table id = "mainTable">
			<caption>器材單</caption>
				<thead>
					<tr>
						<th class = "hide-right" colspan = "5">國立臺灣海洋大學學生社團活動器材借用表</th><th colspan = "5">申請日期:
							<input id = "applyYear"  class = "smallMessage" type = "message">年
							<input id = "applyMonth" class = "smallMessage" type = "message">月
							<input id = "applyDay"   class = "smallMessage" type = "message">日
						</th>
					</tr>
			
					<tr>
						<th rowspan = "2"class = "th_name">社團名稱</th>
							<td rowspan = "2" colspan = "4"><input id = "clubName" class = "wholeMessage" type = "message"></td>
						<th class = "th_name">活動負責人</th>' +
							<td colspan = "4"><input id = "activityLeader" class = "wholeMessage" type = "message"></td>
					</tr>
					<tr>
						<th class = "th_name">連絡電話</th>
							<td colspan = "4"><input id = "phone" class = "wholeMessage" type = "message"></td>
					</tr>
			
					<tr>
						<th class = "th_name">活動名稱</th>
							<td colspan = "4"><input id = "activityName" class = "wholeMessage" type = "message"></td>
						<th class = "th_name">活動日期</th>
							<td colspan = "4">
								<div>
									<input id = "activityYear"  class = "smallMessage" type = "message">年
									<input id = "activityMonth" class = "smallMessage" type = "message">月
									<input id = "activityDay"   class = "smallMessage" type = "message">日
								</div>
							</td>
					</tr>
			
				</thead>

				<tbody>
					<tr>
						<th colspan = "10" style = "letter-spacing: 40px;">以下由工程組組員填寫</th>
					</tr>
					<tr id = "equipmentTitle">
						<th class = "equipmentName" colspan = "4">器材名稱</th>
						<th class = "equipmentValue">數量</th>
						<th class = "equipmentName" colspan = "4">器材名稱</th>
						<th class = "equipmentValue">數量</th>
					</tr>
					
		<?php

		$count = 1;
		for($i = 1;$i <= mysqli_num_rows($data);$i++){
			$rs = mysqli_fetch_row($data);
			if(isset($_POST['light_id'.$i])){
				$result = $rs[2];
				if($count % 2 == 1){ ?> <tr> <?php ;} ?>
	
				<th colspan = "4" id = <?php echo "equipment_".$count ?> ><?php echo $result ?></th>
				<td id = <?php echo "number_".$count ?> ></td>
			
				<?php if($count % 2 == 0){ ?> </tr> <?php ;}
				$count++;
			}
		}
		if($count <= 32){
			for($i = $count; $i <= 32; $i++){
				if($i%2 == 1){
				?>
				<tr>
					<th colspan = "4" id = <?php echo "equipment_".$i ?> ></th>
					<td id = <?php echo "number_".$i ?> ></td>
				<?php
				}
				if($i%2 == 0){
				?>
					<th colspan = "4" id = <?php echo "equipment_".$i ?> ></th>
					<td id = <?php echo "number_".$i ?> ></td>
				</tr>
				<?php
				}
			}
		}
		
		/*
		for($i = 1;$i <= mysqli_num_rows($data);$i++){
			$count = 1;
			$rs = mysqli_fetch_row($data);
			if(isset($_POST['light_id'.$i.''])){
				$result = $rs[2];
				$doc->getElementById( "equipment_".$count )->innerHTML = $result;
				
			}
			else $result = "";
		}
		*/
		
		?>
		<tr id = "borrowDate">
			<th colspan = "4">器材借出日期</th><td colspan = "6">
				<div><input id = "borrowYear"  class = "smallMessage" type = "message">年
					<input id = "borrowMonth" class = "smallMessage" type = "message">月
					<input id = "borrowDay"   class = "smallMessage" type = "message">日
					<input id = "borrowHour"   class = "smallMessage" type = "message">時
					<input id = "borrowMinute"   class = "smallMessage" type = "message">分
				</div>
			</td>
		</tr>
		<tr id = "returnDate">
			<th colspan = "4">器材歸還日期</th><td colspan = "6">
				<div><input id = "returnYear" class = "smallMessage" type = "message">年
					<input id = "returnMonth" class = "smallMessage" type = "message">月
					<input id = "returnDay" class = "smallMessage" type = "message">日
					<input id = "returnHour" class = "smallMessage" type = "message" value = "">時
					<input id = "returnMinute" class = "smallMessage" type = "message" value = "">分
				</div>
			</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<th>核定</th><td></td>
			<th>場地管理人</th><td></td>
			<th>工程組初核</th><td></td>
			<th>工程組經手人</th><td></td>
			<th>社團負責人</th><td></td>
		</tr>
	</tfoot>
</table>
		
		<!--table end-->
		<div>
			<form action="/action_page.php">
			<input id = "submit" type = "submit">
			</form>
			<input type = "button" value = "reset" onclick = "reset()">
		</div>
		
	</div>
	
</body>
</html>