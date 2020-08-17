$(document).ready(function(){	
 
	$("body").on('click',function(){
		if($("img").attr("src")==="first for first.jpg"){$("img").attr("src","second for first.jpg")}
  else if($("img").attr("src")==="second for first.jpg"){$("img").attr("src","crative thinking.png")}
  	else if($("img").attr("src")===""){$("img").attr("src","first for first.jpg")}
		var showImage=("<div></div>");  
      //$("img").show(3500);
      $("img").css("visibility", "visible")
});
	$("#myButton").on('click',function(){
		var myClick= ("<div></div>");
		$("li").css("visibility" , "visible")
	     $("li").css({"color":"white","font-size": "30px"})
	      
	    
	});
});


//var images=["first for first.jpg","second for first.jpg","crative thinking.png"]

//$("img")images.indexOf('src', src);
