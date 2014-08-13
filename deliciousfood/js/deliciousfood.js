var index=0;
$(function(){
	alert("dd");
	$("#index_cd_leftarrow").click(function(){
		left();
	});
	$("#index_cd_rightarrow").click(function(){
		right();
	});
});

function left(){
		index--;
		if(index<0)
			index=$("slider").length-1;
		$(".slide").removeClass("selected");
		$(".slide:eq("+index+")").addClass("selected");
}
function right(){
		index++;
		if(index>$("slider").length-1)
			index=0;
		$(".slide").removeClass("selected");
		$(".slide:eq("+index+")").addClass("selected");

}



