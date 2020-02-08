$(document).ready(function(){
	//yang memiliki class dragable bisa di pindahkan (drag)
	$(".dragable").draggable();

	//yang memiliki dropable bisa menerima hasil drga
	$(".dropable").droppable({
		drop: function(event, ui){

			//mendapatkan nilai dari kotak yang dibawa dan kotak yang menerima
			let tempatMenerima  = $(this).text();
			let kotakYangDibawa = ui.draggable.text();

			if(tempatMenerima == kotakYangDibawa){
				//hilangkan kotak yang dibawa (drag)
				ui.draggable.animate({'opacity' : '0'}, 100);

				//tambahkan class active dikotak yang menerima
				$(this).addClass("active");
			} 
		}
	});
});