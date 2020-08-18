$(document).ready(function(){	
 
	$("body").on('click',function(){
		if($("img").attr("src")==="image1.jpg"){$("img").attr("src","image2.jpg")}
         else if($("img").attr("src")==="image2.jpg"){$("img").attr("src","image3.jpg")}
  	        else if($("img").attr("src")===""){$("img").attr("src","image1.jpg")}


		var showImage=("<div></div>");  
      
      $("img").css("visibility", "visible")
});
	$("#myButton").on('click',function(){
		var myClick= ("<div></div>");
		$("li").css("visibility" , "visible")
	      $("li").css({"color":"white","font-size": "30px","font-weight":"bold"})
	        $("p").css("visibility" , "visible")
	           $("p").css({"color": " #00ccff", "font-size": "150%","text-align":"left" ,"font-weight":"bold"})
	
	         
	});
});


