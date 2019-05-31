function aleatorio(inferior,superior){ 
	numPosibilidades = superior - inferior 
	aleat = Math.random() * numPosibilidades 
	aleat = Math.floor(aleat) 
	return parseInt(inferior) + aleat 
}

$(document).ready(function(){
    
    $('.sidenav').sidenav();
    
    $(".newNode").click(function(e){ 
	   	e.preventDefault();
	   	var x = $(".container").outerWidth()
	   	var y = $(".container").outerHeight() 
	   	var posx = aleatorio(80, x - 30); 
	   	var posy = aleatorio(120, y - 30);
	   	var href = $(this).attr("href");
	   	var newNode = $('<div class="' + href + ' node" style="top: ' + posy + 'px; left: ' + posx + 'px;">' + href.substring(href.length - 1, href.length) +'</div>'); 
	   	$(".container .welcome").fadeOut();
	   	$(".container").append(newNode);
	   	newNode.fadeIn();
	   	newNode.draggable({containment: ".container"});
		newNode.colorPicker();
		$(".clearButtons").fadeIn();
	})
	
	$(".clearAll").on("click", function(){
		$('.container .node').fadeOut(function(){
			$(this).remove();
			$(".container .welcome").fadeIn();
			$(".clearButtons").fadeOut();
		});		
	})
	
	$(".clearLast").on("click", function(){
		$('.container .node').last().fadeOut(function(){
			$(this).remove();
			if($(".container .node").length == 0) {
				$(".container .welcome").fadeIn();
				$(".clearButtons").fadeOut();
			}
		});
		
	})
	
  });
  