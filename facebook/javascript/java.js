
	for (var i = 1; i <= 31; i++) {
		document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + '<option value="Ngày ' +i+ '">'+ i +'</option>'
	}
	for (var i = 1; i <= 12; i++) {
		document.getElementById("month").innerHTML = document.getElementById("month").innerHTML + '<option value="Tháng '+ i +'">Tháng '+ i +'</option>'
	}
	for (var i = 2017; i >= 1950; i--) {
		document.getElementById("year").innerHTML = document.getElementById("year").innerHTML + '<option value="Năm '+i+'">'+ i +'</option>'
	}

	$(document).ready(function(){
		$(".create").on('submit',function(){
			var ivalid = true;
			if ($("#lastname").val().trim() == "" || $("#lastname").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#lastname").next("i").css("display","block");
				$("#lastname").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#lastname").next("i").css("display","none");
			}
			if ($("#name").val().trim() == "" || $("#name").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#name").next("i").css("display","block");
				$("#name").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#name").next("i").css("display","none");
			}
			if ($("#account").val().trim() == "" || $("#account").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#account").next("i").css("display","block");
				$("#account").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#account").next("i").css("display","none");
			}
			if ($("#password").val().trim() == "" || $("#password").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#password").next("i").css("display","block");
				$("#password").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#password").next("i").css("display","none");
			}
			if ($("#date").val().trim() == "Ngày" || $("#month").val().trim() == "Tháng" || $("#year").val().trim() == "Năm" ) {
				$("#year").next("i").css("display","block");
				if ($("#date").val().trim() == "Ngày") {$("#date").css("border","1px solid red")}
				if ($("#month").val().trim() == "Tháng") {$("#month").css("border","1px solid red")}
				if ($("#year").val().trim() == "Năm" ) {$("#year").css("border","1px solid red")}
				
				
				
				ivalid = false;
			}
			else {
				$("#year").next("i").css("display","none");
			}
			if ($("input[name=gender]:checked").length == 0 ) {
				$("#boy").next("i").css("display","block");
				if ($("input[name=gender]:checked").length == 0 ) {$("#gender1").css("border","1px solid red")}
				if ($("input[name=gender]:checked").length == 0 ) {$("#gender2").css("border","1px solid red")}	
				
				ivalid = false;
			}
			else {
				$("#boy").next("i").css("display","none");
				

			}

			return ivalid;

		});
		$('input').on("click",function(){
			$(this).next("i").css("display","none");
			$(this).css("border","1px solid #bdc7d8")			
		})
		$('i').on("click",function(){
			$(this).css("display","none");
			$(this).next("input").css("border","1px solid #bdc7d8")		
		})
		$('.rieng').on("click",function(){
			$("#gender1").css("border","none");
			$("#gender2").css("border","none");
			$("#boy").next("i").css("display","none");	

		})
		$('#date').on("click",function(){
			$("#date").css("border","1px solid #bdc7d8");
				
		})
		$('#month').on("click",function(){
			$("#month").css("border","1px solid #bdc7d8");
				
		})
		$('#year').on("click",function(){
			$("#year").css("border","1px solid #bdc7d8");
				
		})
		$('select').on("click",function(){
			$('select').next("i").css("display","none");
		})
	});


//















