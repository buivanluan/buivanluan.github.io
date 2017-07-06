$(document).ready(function() {
    var a = {
        content0: ['Ngân hàng Á Châu','Asia Commercial Joint Stock Bank','11.259','ACB','acb.com.vn','Q2-2017'],
        conten1: ['Ngân hàng Tiên Phong','Tien Phong Bank','5.550','TPBank','tpb.vn','Q1-2016'],
        content2: ['Ngân hàng Đông Á','DongA Bank','6.000','DAF','dongabank.com.vn','12/06/2015'],
        content3: ['Ngân hàng Đông Nam Á','Southest Asia Bank','5.466','SeABank','seabank.com.vn','Q2-2016'],
        content4: ['Ngân hàng An Bình','An Binh Bank','4.798','ABBANK','abbank.vn','Q2-2016'],
        content5: ['Ngân hàng Bắc Á','Bac A Bank','5.000','BacABank','baca-bank.vn','3/2016'],
        content6: ['Ngân hàng Bản Việt','Viet Capital Bank','3.000','','vietcapitalbank.com.vn','12/06/2015'],
        content7: ['Hàng Hải Việt Nam','Maritime Bank','11.750','MSB','msb.com.vn','06/06/2015'],
        content8: ['Kỹ Thương Việt Nam','','8.878','Techcombank','	techcombank.com.vn','01/04/2015'],
        content9: ['Kiên Long','','3.000','KienLongBank','kienlongbank.com','12/04/2015'],
        content10: ['Nam Á','Nam A Bank','3.021','','namabank.com.vn','Q2-2016'],
        content11: ['Quốc Dân','National Citizen Bank','3.010','NCB','ncb-bank.vn','Q2-2016'],
        content12: ['Việt Nam Thịnh Vượng','','10.765','VPBank','vpbank.com.vn','Q1-2017'],
        content13: ['Phát triển Thành phố Hồ Chí Minh','','8.100','HDBank','hdbank.com.vn','02/03/2015'],
        content14: ['Phương Đông','Orient Commercial Bank','4.000','OCB','ocb.com.vn','Q2-2016'],
        content15: ['Quân đội','Military Bank','16.311','MBB','mbbank.com.vn','18/03/2016'],
        content16: ['Đại chúng','','9.000','PVcom Bank','pvcombank.com.vn','16/06/2015'],
        content17: ['Quốc tế','VIBBank','4.845','VIB','vib.com.vn','31/12/2015'],
        content18: ['Sài Gòn Công Thương','Saigonbank','3.080','SGB','saigonbank.com.vn','31/05/2015'],
        content19: ['Sài Gòn-Hà Nội','SHBank','9.486','SHB','shb.com.vn','23/05/2016'],
        content20: ['Sài Gòn Thương Tín','Sacombank','18.853','STB','sacombank.com.vn','09/06/2015'],
        content21: ['Việt Á','VietABank','3.500','VAB','vietabank.com.vn','Q3-2016'],

    }



    var number = 0;
    for (var x in a) {
        number += 1;
        var length = a[x].length;
       
    } 
    for (var i = 0; i < number-1; i++) {
        var u = document.createElement("tr")
        document.getElementById("browser").appendChild(u);        
    }
     for (var i = 1; i < number; i++) {
     	for (var j = 0; j < length; j++) {
     		var u = document.createElement("td")
        	document.getElementsByTagName("tr")[i].appendChild(u);
     	}        
    }
    
    for (var i = 1; i < number; i++) {
        for (var x in a) {
            if (x.slice(x.search("content")+7,x.lenght) == i) {
            	var row = document.getElementsByTagName("tr")
                for (var j = 0; j < a[x].length; j++) {
                    row[i].getElementsByTagName("td")[j].innerHTML =  a[x][j] ;

                }
            }
        }
    }
   
    
    	
    function daonumber(n) {
        var check = true;
        while (check) {
            check = false;
            var a = document.getElementsByTagName("tr");
            for (var i = 1; i < a.length - 1; i++) {
                var b = a[i].getElementsByTagName("td")[n];

                var c = a[i + 1].getElementsByTagName("td")[n];               
                if (Number(b.innerHTML) > Number(c.innerHTML)) {
                    a[i].parentNode.insertBefore(a[i+1],a[i])
                    check = true;
                    break;

                }
            }

        }

    }
   
     function nguocnumber(n) {
         var check = true;
        while (check) {
            check = false;
            var a = document.getElementsByTagName("tr");
            for (var i = 1; i < a.length - 1; i++) {
                var b = a[i].getElementsByTagName("td")[n];
                var c = a[i + 1].getElementsByTagName("td")[n];            
                if (Number(b.innerHTML) < Number(c.innerHTML)) {
                    a[i].parentNode.insertBefore(a[i+1],a[i])
                    check = true;
                    break;

                }
            }

        }

    }
     function dao(n) {
        var check = true;
        while (check) {
            check = false;
            var a = document.getElementsByTagName("tr");
            for (var i = 1; i < a.length - 1; i++) {
                var b = a[i].getElementsByTagName("td")[n];

                var c = a[i + 1].getElementsByTagName("td")[n];               
                if (b.innerHTML.toLowerCase() > c.innerHTML.toLowerCase()) {
                    a[i].parentNode.insertBefore(a[i+1],a[i])
                    check = true;
                    break;

                }
            }

        }

    }
   
     function nguoc(n) {
         var check = true;
        while (check) {
            check = false;
            var a = document.getElementsByTagName("tr");
            for (var i = 1; i < a.length - 1; i++) {
                var b = a[i].getElementsByTagName("td")[n];
                var c = a[i + 1].getElementsByTagName("td")[n];            
                if (b.innerHTML.toLowerCase() < c.innerHTML.toLowerCase()) {
                    a[i].parentNode.insertBefore(a[i+1],a[i])
                    check = true;
                    break;

                }
            }

        }

    }

    var col0 = 0;
    var col1 = 0;
    var col2 = 0;
    var col3 = 0;
    var col4 = 0;
    var col5 = 0;
    function back(){
    if (col0 == 0) {
    	$("#fa0-1").css("display","block");
		$("#fa0-2").css("display","none");
		$("#fa0-3").css("display","none");
    }
    if (col1 == 0) {
    	$("#fa1-1").css("display","block");
		$("#fa1-2").css("display","none");
		$("#fa1-3").css("display","none");
    }
    if (col2 == 0) {
    	$("#fa2-1").css("display","block");
		$("#fa2-2").css("display","none");
		$("#fa2-3").css("display","none");
    }
    if (col3 == 0) {
    	$("#fa3-1").css("display","block");
		$("#fa3-2").css("display","none");
		$("#fa3-3").css("display","none");
    }
    if (col4 == 0) {
    	$("#fa4-1").css("display","block");
		$("#fa4-2").css("display","none");
		$("#fa4-3").css("display","none");
    }
    if (col5 == 0) {
    	$("#fa5-1").css("display","block");
		$("#fa5-2").css("display","none");
		$("#fa5-3").css("display","none");
    }}

    $("#col-0").on("click",function(){

	    col0 += 1;
	    col1 = 0;
	    col2 = 0;
	    col3 = 0;
	    col4 = 0;
	    col5 = 0;
	    back();
    	if (col0%2 == 0) {
    		$("#fa0-2").css("display","block");
    		$("#fa0-1").css("display","none");
    		$("#fa0-3").css("display","none");
    		dao(0);
    	}
    	else{
    		nguoc(0);
    		$("#fa0-3").css("display","block");
    		$("#fa0-1").css("display","none");
    		$("#fa0-2").css("display","none");
    	}    	
    })
    $("#col-1").on("click",function(){
 		col0 = 0;
	    col1 += 1;
	    col2 = 0;
	    col3 = 0;
	    col4 = 0;
	    col5 = 0;
	    back();    	
	    if (col1%2 == 0) {
    		dao(1);
    		$("#fa1-2").css("display","block");
    		$("#fa1-1").css("display","none");
    		$("#fa1-3").css("display","none");
    	}
    	else{
    		nguoc(1);
    		$("#fa1-3").css("display","block");
    		$("#fa1-1").css("display","none");
    		$("#fa1-2").css("display","none");
    	}    	
    })
    $("#col-2").on("click",function(){
    	col0 = 0;
	    col1 = 0;
	    col2 +=1;
	    col3 = 0;
	    col4 = 0;
	    col5 = 0;
	    back();
    	if (col2%2 == 0) {
    		daonumber(2);
    		$("#fa2-2").css("display","block");
    		$("#fa2-1").css("display","none");
    		$("#fa2-3").css("display","none");
    	}
    	else{
    		nguocnumber(2);
    		$("#fa2-3").css("display","block");
    		$("#fa2-1").css("display","none");
    		$("#fa2-2").css("display","none");
    	}    	
    })
    $("#col-3").on("click",function(){
    	col0 = 0;
	    col1 = 0;
	    col2 = 0;
	    col3 +=1;
	    col4 = 0;
	    col5 = 0;
	    back();
    	if (col3%2 == 0) {
    		dao(3);
    		$("#fa3-2").css("display","block");
    		$("#fa3-1").css("display","none");
    		$("#fa3-3").css("display","none");
    	}
    	else{
    		nguoc(3);
    		$("#fa3-3").css("display","block");
    		$("#fa3-1").css("display","none");
    		$("#fa3-2").css("display","none");
    	}    	
    })
    $("#col-4").on("click",function(){
    	col0 = 0;
	    col1 = 0;
	    col2 = 0;
	    col3 = 0;
	    col4 +=1;
	    col5 = 0;
	    back();
    	if (col4%2 == 0) {
    		dao(4);
    		$("#fa4-2").css("display","block");
    		$("#fa4-1").css("display","none");
    		$("#fa4-3").css("display","none");
    	}
    	else{
    		nguoc(4);
    		$("#fa4-3").css("display","block");
    		$("#fa4-1").css("display","none");
    		$("#fa4-2").css("display","none");
    	}    	
    })
    $("#col-5").on("click",function(){
    	col0 = 0;
	    col1 = 0;
	    col2 = 0;
	    col3 = 0;
	    col4 = 0;
	    col5 +=1;
	    back();
    	if (col5%2 == 0) {
    		dao(5);
    		$("#fa5-2").css("display","block");
    		$("#fa5-1").css("display","none");
    		$("#fa5-3").css("display","none");
    	}
    	else{
    		nguoc(5);
    		$("#fa5-3").css("display","block");
    		$("#fa5-1").css("display","none");
    		$("#fa5-2").css("display","none");
    	}    	
    })

    $("tr").mouseenter(function(){
    	$("tr").css("opacity","0.3")
    	$(this).addClass("hover")

    })
    $("tr").mouseleave(function(){
    	$(this).removeClass("hover")
    	$("tr").css("opacity","1")
    })
});
