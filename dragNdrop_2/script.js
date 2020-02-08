$(document).ready(function(){
	//yang memiliki class dragable bisa di pindahkan (drag)
	$(".dragable").draggable({
		revert: true //kembali ke posisi awal
	});

	//class dropable dapat menerima hasil drag
	$(".dropable").droppable({
		drop: function(event, ui){
			let nilaiBenar = $(this).attr('title'); //nilai yg benar

			//mendapatkan nilai dari kotak yang dibawa
			// let tempatMenerima  = $(this).text();
			let kotakYangDibawa = ui.draggable.text();

			if(kotakYangDibawa == nilaiBenar)
			{
				//hilangkan kotak yang dibawa (drag)
				ui.draggable.animate({'opacity' : '0'}, 100);

				$(this).removeClass("error"); //hapus class error

				//tambahkan class active dikotak yang menerima
				$('.ui-widget-header').addClass("active");

				//isi kotak yg dibawa dengan nilai benar
				$(this).text(nilaiBenar);
				}else{
					$(this).addClass("error"); //tambahkan class error
			}
		} 
	});
});

// soal kedua
$(document).ready(function(){
	//yang memiliki class dragable bisa di pindahkan (drag)
	$(".dragableKedua").draggable({
		revert: true //kembali ke posisi awal
	});

	//class dropable dapat menerima hasil drag
	$(".dropableKedua").droppable({
		drop: function(event, ui){
			let nilaiBenarKedua = $(this).attr('title'); //nilai yg benar

			//mendapatkan nilai dari kotak yang dibawa
			// let tempatMenerima  = $(this).text();
			let kotakYangDibawaKedua = ui.draggable.text();

			if(kotakYangDibawaKedua == nilaiBenarKedua)
			{
				//hilangkan kotak yang dibawa (drag)
				ui.draggable.animate({'opacity' : '0'}, 100);

				$(this).removeClass("errorKedua"); //hapus class error

				//tambahkan class active dikotak yang menerima
				$('.ui-widget-headerKedua').addClass("activeKedua");

				//isi kotak yg dibawa dengan nilai benar
				$(this).text(nilaiBenarKedua);
				}else{
					$(this).addClass("errorKedua"); //tambahkan class error
			}
		} 
	});
});

// soal ketiga
$(document).ready(function(){
	//yang memiliki class dragable bisa di pindahkan (drag)
	$(".dragableKetiga").draggable({
		revert: true //kembali ke posisi awal
	});

	//class dropable dapat menerima hasil drag
	$(".dropableKetiga").droppable({
		drop: function(event, ui){
			let nilaiBenarKetiga = $(this).attr('title'); //nilai yg benar

			//mendapatkan nilai dari kotak yang dibawa
			// let tempatMenerima  = $(this).text();
			let kotakYangDibawaKetiga = ui.draggable.text();

			if(kotakYangDibawaKetiga == nilaiBenarKetiga)
			{
				//hilangkan kotak yang dibawa (drag)
				ui.draggable.animate({'opacity' : '0'}, 100);

				$(this).removeClass("errorKetiga"); //hapus class error

				//tambahkan class active dikotak yang menerima
				$('.ui-widget-headerKetiga').addClass("activeKetiga");

				//isi kotak yg dibawa dengan nilai benar
				$(this).text(nilaiBenarKetiga);
				}else{
					$(this).addClass("errorKetiga"); //tambahkan class error
			}
		} 
	});
});

// soal keempat
$(document).ready(function(){
	//yang memiliki class dragable bisa di pindahkan (drag)
	$(".dragableKeempat").draggable({
		revert: true //kembali ke posisi awal
	});

	//class dropable dapat menerima hasil drag
	$(".dropableKeempat").droppable({
		drop: function(event, ui){
			let nilaiBenarKeempat = $(this).attr('title'); //nilai yg benar

			//mendapatkan nilai dari kotak yang dibawa
			// let tempatMenerima  = $(this).text();
			let kotakYangDibawaKeempat = ui.draggable.text();

			if(kotakYangDibawaKeempat == nilaiBenarKeempat)
			{
				//hilangkan kotak yang dibawa (drag)
				ui.draggable.animate({'opacity' : '0'}, 100);

				$(this).removeClass("errorKeempat"); //hapus class error

				//tambahkan class active dikotak yang menerima
				$('.ui-widget-headerKeempat').addClass("activeKeempat");

				//isi kotak yg dibawa dengan nilai benar
				$(this).text(nilaiBenarKeempat);
				}else{
					$(this).addClass("errorKeempat"); //tambahkan class error
			}
		} 
	});
});