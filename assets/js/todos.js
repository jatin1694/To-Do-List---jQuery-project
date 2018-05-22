//check off specific todos by clicking
$("ul").on("click", "li" ,function(){
	//if li is grey, turn it black
	//else turn it grey
	$(this).toggleClass("completed");
});

//click on X to delete todo

$("ul").on("click","li span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//new todo creation
$("input[type='text']").keypress(function(event){
	if(event.which === 13 && $(this).val()!=""){
		//grabbing new todo text from input
		var text  = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span> X </span>"+text+"</li>");
		$(this).val("");
	}
})
