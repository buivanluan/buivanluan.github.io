$(document).ready(function(){

	$(".common").on("click",function(){

		$('.common').css("display","block");
		$(".hidden").css("display","none")
		$(this).css("display","none")
		$(this).next(".hidden").css("display","block")
		$(this).next(".hidden").children("i").css("display","block")
		$(this).next(".hidden").css("z-index","10")
		$(this).parent().children('.common').css("display","none");
		$(this).next(".hidden").children(".avartar1").removeClass('left-back');
		$(this).next(".hidden").children(".avartar1").removeClass('center-back');
		$(this).next(".hidden").children(".avartar1").removeClass('right-back');
		$(this).parent().children(".note1").children('p').removeClass("text-back");
		$(this).parent().children(".subcribe").children("p").removeClass("text-back");


	})

	$(".fa").on("click",function(){
		$(this).css("display","none")
		if ($(this).next(".avartar1").children('img').attr("class") =="left") {
			$(this).next(".avartar1").addClass('left-back');};
		
		if ($(this).next(".avartar1").children('img').attr("class") =="center") { 
			$(this).next(".avartar1").addClass('center-back');
		};
		
		if ($(this).next(".avartar1").children('img').attr("class") =="right") {
			$(this).next(".avartar1").addClass('right-back');
		};
		$(this).parent().children(".note1").children("p").addClass("text-back");
		$(this).parent().children(".subcribe").children("P").addClass("text-back");
		
		var x = $(this).parent();
		var y = $(this).parent().parent().children('.common');
		setTimeout(function(){
		x.css("display","none");
		y.css("display","block")},2000);
		

		
		
		

	})

})