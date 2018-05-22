//check off specific todos by clicking
$("li").click(function(){
	//if li is grey, turn it black
	//else turn it grey
	$(this).toggleClass("completed");
});

//click on X to delete todo

$("span").click(function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

