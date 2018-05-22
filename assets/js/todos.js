//check off specific todos by clicking
$("li").click(function(){
	
	//if li is grey, turn it black
	//else turn it grey
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black",
			textDecoration: 'none'
		});	
	}
	else{
		$(this).css({
			color: "grey",
			textDecoration: "line-through"
		});
	}
});