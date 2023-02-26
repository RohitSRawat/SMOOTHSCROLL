const smoothscroll = () => {
   var $= window.jQuery
var start = true






window.jQuery( document ).ready(function() {
	

  	window.scrollTo(0, 0)
	$('body').css('opacity','1')
 $(".minicircle").on('click', function(e) {
   
      

  
   	     start = false

     $('.activeborder').removeClass('activeborder')
    
   var hrefname = $.attr(this, 'href')
         var addclassborder = $(this).parent()
         $(addclassborder).addClass('activeborder')
         var getsection = hrefname
               $('.activescroll').removeClass('activescroll')
                      $(getsection).addClass('activescroll')
   $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
   setTimeout(() => {
     start = true
     
   },1000)
});
  
 
    

  
  
  
});



const findindex = (value) => {
	
	
		var ele = $('.dots')   
var elementborder = $.makeArray(ele)
var arr = $.makeArray(ele).filter((x) => {
       

      return $(x).hasClass("activeborder")

     })[0]
	let borderindex = elementborder.indexOf(arr);
	
	console.log(borderindex)
	if(value == 'down'){
		if(borderindex == elementborder.length){
			return
		}else{
			$($('.dots')[borderindex]).removeClass('activeborder') 
			$($('.dots')[borderindex+1]).addClass('activeborder')
		}
	}else{
		if(borderindex == 0){
			return
		}else{
			$($('.dots')[borderindex]).removeClass('activeborder') 
			$($('.dots')[borderindex-1]).addClass('activeborder')
		}
		
		
	}
	 

	// //borderindextoremove current 
	// var elesection = $('.elementor-section-wrap section')
	// var elementsection = $.makeArray(elesection)

      // var arrsection = $.makeArray(elesection).filter((x) => {
       

      // return $(x).hasClass("activescroll")

     // })[0]
	 
		// let sectionindex = elementsection.indexOf(arrsection);





}


const scrollnumber = (top,value) => {
	
	     start = false
		
		findindex(value)
		
		

		 
$('html,body').animate({ scrollTop: top },1000,"linear",function(){
	
start = true
		

});


	
}





const scrollmousewheel = (value) => {
	
	// var ele = $('.elementor-section-wrap section')
     // var arr = $.makeArray(ele).map((x) => {

      // return $(x).offset().top

     // })
	  var ele = $('.elementor-3425 section')
      var arr = $.makeArray(ele).filter((x) => {
       

      return $(x).hasClass("activescroll")

     })[0]
	 if(value == 'up' ){
		 if(start == true && $(arr).prev().length != 0){
			  var prev =  $(arr).prev()
		 $(arr).removeClass("activescroll");
		 $(prev).addClass("activescroll");
         var nextnumber = $(prev).offset().top
		 
		 scrollnumber(nextnumber,value) 
		 }else{
			 return
			 
		 }
		 
		 
	 }else{
		  if(start == true && $(arr).next().length != 0){
			  var next =  $(arr).next()
		 $(arr).removeClass("activescroll");
		 $(next).addClass("activescroll");
         var nextnumber = $(next).offset().top
		 
		 scrollnumber(nextnumber,value)
		 }else{
			 return
		 }
        
	 }
	
	
	 
	
}




$(window).on('wheel', function(e){

 
  if(e.originalEvent.deltaY !== 0){

    if(e.originalEvent.deltaY < 0){
            scrollmousewheel('up')

	  
	  
    }
    else {
		console.log('hello')
      scrollmousewheel('down')
	  
	 
    }
  }
});



}
