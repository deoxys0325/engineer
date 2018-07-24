
var all_equipment = {
	light_control_panel: {
		1: 		{ category: "燈控盤", name: "16軌燈控盤", namenumber: "2", ps: "" }, 
		"24軌燈控盤":		{ number: "1", ps: "" },
		"Pulsar":			{ number: "2", ps: "(黑*1, 紅*1)" },
		"Avolites pearl":	{ number: "1", ps: "" },
		"Tiger touch II":	{ number: "1", ps: "" }
	},
	
	"Dimmer": {
		"紅D":	 	{ number: "1", ps: "" },
		"黑D":		{ number: "1", ps: "" },
		"夢D":		{ number: "2", ps: "" },
		"小觸控":	{ number: "1", ps: "" }
	},
	
	"燈具": {
		"PAR 64(含C型夾C-05)":	{ number: "46", ps: "一號*32, 二號*6, 三號*2, 四號*6" },
		"PAR 64色片":			{ number: "222", ps: "(B*15, LB*28, G*13, LG*2, W*6, Y*25, R*18, O*41, Pink*40, Pur*27, SW*7)" },
		"PAR 64色片夾":			{ number: "35", ps: "" },
		"PAR 46":				{ number: "28", ps: "" },
		"PAR 46色片":			{ number: "148", ps: "(B*8, LB*23, G*7, W*17, R*8, Y*14, O*10, Pink*29, Pur*29)" },
		"PAR 46色片夾":			{ number: "27", ps: "" },
		"46專用線":				{ number: "9", ps: "" },
		"電腦燈(OBY5)":			{ number: "4", ps: "" },
		"電腦燈(IMOVE)":		{ number: "2", ps: "" },
		"電腦燈(Mizar)":		{ number: "1", ps: "" },
		"電腦燈(Beam)":			{ number: "8", ps: "" },
		"電腦燈(Big Eyes)":		{ number: "2", ps: "" },
		"LED PAR":				{ number: "15", ps: "" },
		"LED PAR(W)":			{ number: "8", ps: "" },
		"石英燈":				{ number: "5", ps: "" },
		"泛光燈":				{ number: "6", ps: "" },
		"四頭燈":				{ number: "3", ps: "LCD*1" },
		"閃燈":					{ number: "3", ps: "大*2, 小*1" },
		"排燈":					{ number: "2", ps: "" },
		"火焰燈":				{ number: "1", ps: "" },
		"彩虹燈":				{ number: "3", ps: "" },
		"琉璃球":				{ number: "2", ps: "大*1, 小*1" },
		"follow燈(含燈架)":		{ number: "2", ps: "220V" }
	},
	
	"燈光線材": {
		"電源線(裸-快)":		{ number: "12", ps: "" },	
		"電源線(快-快)":		{ number: "18", ps: "(二合一*2 , 50呎*4 , 110呎*8 , 150呎*4)" },
		"Multicable延長線":		{ number: "12", ps: "(110 呎*2，50呎*10)" },
		"Multicable轉接頭組":	{ number: "30", ps: "(公頭*21，母頭*9)" },
		"燈線":					{ number: "84", ps: "" },
		"短燈線":				{ number: "15", ps: "" },
		"燈線(3pin公-3pin公)":	{ number: "2", ps: "" },
		"轉接線(H公-3pin母)":	{ number: "15", ps: "" },
		"轉接線(H母-3pin公)":	{ number: "5", ps: "" },
		"電腦燈訊號線"	:		{ number: "44", ps: "" },
		"5pin訊號線":			{ number: "2", ps: "1長1短" },
		"訊號線(5pin公-can母)":	{ number: "3", ps: "2長1短" },
		"訊號線(5pin母-can公)":	{ number: "3", ps: "3長" },
		"Y扣":					{ number: "6", ps: "" }
	},
	
	"其他": {
		"C型夾":				{ number: "37", ps: "" },
		"O型扣":				{ number: "46", ps: "" },
		"LED PAR專用C型夾":		{ number: "8", ps: "" },
		"IMOVE專用C型夾":		{ number: "4", ps: "2組" },
		"OBY5/Mizar專用C型夾":	{ number: "4", ps: "2組" },
		"燈架+橫桿":			{ number: "13", ps: "桿(黑*10, 銀*4) 架(黑*9, 銀*6)" },
		"手搖式燈架":			{ number: "2", ps: "" },
		"TRUSS":				{ number: "2", ps: "" },
		"方形TRUSS":			{ number: "2", ps: "" },
		"直立TRUSS":			{ number: "14", ps: "(2m*4, 1m*6, 80cm*4)" },
		"底板(含螺絲)":			{ number: "6", ps: "" },
		"變壓器":				{ number: "2", ps: "" },
		"煙機(含遙控)":			{ number: "3", ps: "" },
		"DMX分配器":			{ number: "2", ps: "" },
		"DMX發訊器(含天線)":	{ number: "2", ps: "(天線*12)" }
	}
};


function create_item(category, name, number, ps){
	var item =
	'<tr>'
		'<th>'+ category +'</th>'+
		'<td>'+  +'</td>'+
		'<td>'+ name +'</td>'+
		'<td>'+ number +'</td>'+
		'<td>'+ ps +'</td>'+
	'</tr>';
	return item;
}

function create_content(){
	all_equipment.燈控盤
	create_item
	
}

function create_title(){
	var thead = '<thead>'+
				'+<tr>'+
					'<th>分類</th>'+
					'<th>加入</th>'+
					'<th>名稱</th>'+
					'<th>數量</th>'+
					'<th>備註</th>'+
				'</tr>'+
			'</thead>';
	return thead;
}

function createTable( main ){
	var table =
	'<table>'+
		'<caption>燈光器材</caption>';
	table += create_title();
	table += create_content();
	
}

function start(){
	var main = document.getElementById( "main" );
	//createTable( main );
}

window.addEventListener( "load", start, false );


