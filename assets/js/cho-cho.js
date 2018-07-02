var positionShip, positionCar2, positionBenzo, timeVisible, positionEarth, positionTrafficLights1, positionCloud, firstPositionEarth, firstPositionTrafficLights1, firstPositionCloud;
var slideGo = false;
$(document).ready(function(){

	positionBenzo = parseInt($('.benzovoz').css('left'));
	positionCar2 = parseInt($('.auto_2').css('left'));
	positionShip = parseInt($('.ship').css('left'));
	firstPositionEarth = positionEarth = parseInt($('.earth').css('left'));
	firstPositionCloud = positionCloud = parseInt($('.cloud').css('left'));

	$('.step_5 .next_btn').click(function(){
		return false;
	})

	$('.next_btn').click(function(){
		if (slideGo) return;
		slideGo = true;
		$('.inner_tl').addClass('active');
		setTimeout(function(){
			$('.inner_tl').removeClass('active');
		}, 7000);
		$('.inner_cho_cho').addClass('active');
		setTimeout(function(){
			$('.inner_cho_cho').removeClass('active');
		}, 5000);
		th = $(this);
		slide_step = $(this).parent().parent().parent().attr('data-index');
			$('.step').fadeOut(1000);
			setTimeout(function(){
				th.parent().parent().parent().hide();
			}, 1000)
		switch (+slide_step) {
			case 1: 
				stepOne();
				break;
			case 2: 
				stepTwo();
				break;
			case 3: 
				stepThree();
				break;
			case 4: 
				stepFour();
				break;
		}
				visionStep();
	});


	$('.prev_btn').click(function(){
		positionEarth = firstPositionEarth;
		positionCloud = firstPositionCloud;

		$('.inner_banner').animate({
			opacity: '0',
		}, 1500);

		setTimeout(function(){
			$('.earth, .banner_bg').css({'left' : positionEarth});
			$('.cloud').css({'left' : positionCloud});

			$('.step').hide();
			$('.step_1').show();
			$('.step_1').css({'opacity' : '1'});

			$('.cho_cho').removeClass('active');
			$('.benzovoz').removeClass('active');
			$('.auto_1').removeClass('active');
			$('.benzovoz_2').removeClass('active');
			$('.plane').removeClass('active');

			$('.benzovoz').css({'left' : positionBenzo});
			$('.auto_2').css({'left' : positionCar2}); //3380
			$('.ship').animate().stop();
			$('.ship').css({'left' : positionShip}); //3875
			$('.city').css({'left' : '3700px'});
		}, 1600);

		setTimeout(function(){
			$('.inner_banner').animate({
				opacity: '1',
			}, 5000);
		}, 1700);

	});

});

function stepOne() {
	positionEarth -= 1500;
	positionCloud -= 600;
	setTimeout(function(){
		$('.earth, .banner_bg').animate({
		left: positionEarth,
		}, 8000);
		$('.cloud').animate({
			left: positionCloud,
		}, 8000);
	},1500);
	timeVisible = +9000;
}

function stepTwo() {
	positionEarth -= 1600;
	positionCloud -= 700;
	setTimeout(function(){
		$('.earth, .banner_bg').animate({
		left: positionEarth,
		}, 8000);
		$('.cloud').animate({
			left: positionCloud,
		}, 8000);
	},1500);
	setTimeout(function(){
		$('.cho_cho').addClass('active');
	},4000);
	setTimeout(function(){
		$('.benzovoz').addClass('active');
	},9000);
	timeVisible = +9000;
}

function stepThree() {
	positionEarth -= 2500;
	positionCloud -= 700;
	setTimeout(function(){
		$('.earth, .banner_bg').animate({
		left: positionEarth,
		}, 16000);
		$('.cloud').animate({
			left: positionCloud,
		}, 16000);
		$('.benzovoz').animate({
			left: positionBenzo + 200, // '610'
		}, 16000);
		$('.auto_2').animate({
			left: positionCar2 - 2500, //880
		}, 16000);
		$('.city').animate({
			left: '3850',
		}, 16000);
	},1500);
	setTimeout(function(){
		$('.auto_1').addClass('active');
	},4500);
	setTimeout(function(){
		$('.benzovoz').removeClass('active');
	},18000);
	timeVisible = +17000;
}

function stepFour() {
	positionEarth -= 3150;
	positionCloud -= 600;
	$('.benzovoz_2').addClass('active');
	$('.plane').addClass('active');
	setTimeout(function(){
		$('.earth, .banner_bg').animate({
		left: positionEarth,
		}, 13000);
		$('.cloud').animate({
			left: positionCloud,
		}, 13000);
		$('.auto_2').animate({
			left: '300',
		}, 13000);
		$('.ship').animate({
			left: positionShip - 3150,
		}, 13000);
		$('.benzovoz_2.active').animate({
			left: positionEarth,
		}, 20000);
		$('.plane.active').animate({
			left: positionEarth,
			top: '-400',
		}, 25000);
	},1500);
	setTimeout(function(){
		$('.ship').animate({
			left: positionShip,
		}, 40000);
	},17000);
	timeVisible = +14000;
}

function visionStep() {
	setTimeout(function(){
		var x = 0;
		x = +slide_step + 1;
		$(".step[data-index='" + x + "']").fadeIn(1000, function(){
					slideGo = false;
				});
	}, timeVisible);
}
