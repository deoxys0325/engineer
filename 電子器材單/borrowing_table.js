var maxEquipmentNumber = 32;

function createBorrowingTable( begin ){
	var main = document.getElementById("main");
	var HTML = "";
	HTML += 
'<table id = "mainTable">' +
	'<caption>器材單</caption>' +
		'<thead>' +
			'<tr>' +
				'<th class = "hide-right" colspan = "5">國立臺灣海洋大學學生社團活動器材借用表</th><th colspan = "5">申請日期:' +
					'<input id = "applyYear"  class = "smallMessage" type = "message">年' +
					'<input id = "applyMonth" class = "smallMessage" type = "message">月' +
					'<input id = "applyDay"   class = "smallMessage" type = "message">日' +
				'</th>' +
			'</tr>' +
			
			'<tr>' +
				'<th rowspan = "2"class = "th_name">社團名稱</th>' +
					'<td rowspan = "2" colspan = "4"><input id = "clubName" class = "wholeMessage" type = "message"></td>' +
				'<th class = "th_name">活動負責人</th>' +
					'<td colspan = "4"><input id = "activityLeader" class = "wholeMessage" type = "message"></td>' +
			'</tr>' +
			'<tr>' +
				'<th class = "th_name">連絡電話</th>' +
					'<td colspan = "4"><input id = "phone" class = "wholeMessage" type = "message"></td>' +
			'</tr>' +
			
			'<tr>' +
				'<th class = "th_name">活動名稱</th>' +
					'<td colspan = "4"><input id = "activityName" class = "wholeMessage" type = "message"></td>' +
				'<th class = "th_name">活動日期</th>' +
					'<td colspan = "4">' +
						'<div><input id = "activityYear"  class = "smallMessage" type = "message">年' +
							'<input id = "activityMonth" class = "smallMessage" type = "message">月' +
							'<input id = "activityDay"   class = "smallMessage" type = "message">日' +
						'</div>' +
					'</td>' +
			'</tr>' +
			
		'</thead>' +
		
		'<tbody>' +
			'<tr>' +
				'<th colspan = "10" style = "letter-spacing: 40px;">以下由工程組組員填寫</th>' +
			'</tr>' +
			
			'<tr>' +
				'<th class = "equipmentName" colspan = "4">器材名稱</th>' +
					'<th class = "equipmentValue">數量</th>' +
				'<th class = "equipmentName" colspan = "4">器材名稱</th>' +
					'<th class = "equipmentValue">數量</th>' +
			'</tr>';
	for(var i = 0+begin; i < 32+begin; i++){
		if(parseInt(i/10) === 0) var x = "00" + i;
		else if(parseInt(i/10) <= 9) var x = "0" + i;
		else var x = i;
		
		if(i%2 == 0){
			HTML += '<tr>';
			HTML += '<th colspan = "4" id = "equipment' + x + '"></th><td><input id = "value' + x + '" class = "wholeMessage" type = "message"></td>';
		}
		if(i%2 == 1){
			HTML += '<th colspan = "4" id = "equipment' + x + '"></th><td><input id = "value' + x + '" class = "wholeMessage" type = "message"></td>';
			HTML += '</tr>';
		}
	}
	HTML +=
		'<tr>' +
			'<th colspan = "4">器材借出日期</th><td colspan = "6">' +
				'<div><input id = "borrowYear"  class = "smallMessage" type = "message">年' +
					'<input id = "borrowMonth" class = "smallMessage" type = "message">月' +
					'<input id = "borrowDay"   class = "smallMessage" type = "message">日' +
					'<input id = "borrowHour"   class = "smallMessage" type = "message">時' +
					'<input id = "borrowMinute"   class = "smallMessage" type = "message">分' +
				'</div>' +
			'</td>' +
		'</tr>' +
		'<tr>' +
			'<th colspan = "4">器材歸還日期</th><td colspan = "6">' +
				'<div><input id = "returnYear" class = "smallMessage" type = "message">年' +
					'<input id = "returnMonth" class = "smallMessage" type = "message">月' +
					'<input id = "returnDay" class = "smallMessage" type = "message">日' +
					'<input id = "returnHour" class = "smallMessage" type = "message" value = "">時' +
					'<input id = "returnMinute" class = "smallMessage" type = "message" value = "">分' +
				'</div>' +
			'</td>' +
		'</tr>' +
	'</tbody>' +
	'<tfoot>' +
		'<tr>' +
			'<th>核定</th><td></td>' +
			'<th>場地管理人</th><td></td>' +
			'<th>工程組初核</th><td></td>' +
			'<th>工程組經手人</th><td></td>' +
			'<th>社團負責人</th><td></td>' +
		'</tr>' +
	'</tfoot>' +
'</table>';

main.innerHTML += HTML;
}

function addEquipment(){
	for(var i = 1;i <= mysqli_num_rows($data);i++){
			$count = 1;
			$rs = mysqli_fetch_row($data);
			if(isset($_POST['light_id'.$i])){
				$result = $rs[2];
				//$doc->getElementById( "equipment_".$count )->innerHTML = $result;
				
			}
			else $result = "";
		}
	document.getElementById("")
	
	
}

function reset(){
	for(var i = 1;i <= 32;i++){
		document.getElementById( "equipment_"+i ).innerHTML = "";
		document.getElementById( "number_"+i ).innerHTML = "";
	}
}


function start(){
	var equipmentNumber = 0;
	if(equipmentNumber <= maxEquipmentNumber){
		//createBorrowingTable(equipmentNumber);
		
	}
	//else{ createBorrowingTable(equipmentNumber + maxEquipmentNumber); }
}

window.addEventListener( "load", start, false );