
$(document).ready(function(){
	$("#goTop").click( function(){ go_to_top(10);
	});
	$("#goTop2").click( function(){ go_to_top(1);
	});
	
	$("#goTop2").mouseover( function(){
		$("#goTop2").text("Go to top faster!" );
		$("#goTop2").attr("id", "goTop3");
	});
	$("#goTop2").mouseout( function(){
		$("#goTop3").text("Go to top" );
		$("#goTop3").attr("id", "goTop2");
	});
});



function go_to_top( time ){
	var x = window.pageXOffset;
	var y = window.pageYOffset;
	var percent = 0;
	var running = setInterval(move_to_top_right, time);
	function move_to_top_right(){
		if(percent == 100) clearInterval( running );
		else{
			var move_x, move_y;
				if(window.pageXOffset <= 0) move_x = 0;
				else move_x = -x/100;
				if(window.pageYOffset <= 0) move_y = 0;
				else move_y = -y/100;
			window.scrollBy(move_x, move_y);
			percent++;
		}
	}
	
}