$(document).ready(function(){

	var totalHeight = $(document).height() - $(window).height();
	// console.log(totalHeight);

	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    var ratio = height/totalHeight;

	    var vfValue = Math.round( ratio*(900-100) + 100 );

		console.log(vfValue);

		$('.text').css('--font-weight', vfValue);
		if ( ratio > 0.04){
			$('.text').addClass('light');
			$('.text').text('HOW DEEP DOES THE JOURNEY GO?');
		}else{
			$('.text').removeClass('light');
			$('.text').removeClass('WHO IN THE WORLD AM I? THAT IS THE GREAT PUZZLE...');
		}

		if ( ratio > 0.145){
			$('.text').addClass('light');
			$('.text').text('DONT WANT TO KNOW');
		}else{
			$('.text').removeClass('light');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.2){
			$('.text').addClass('disappear');
			$('.text').text('AFRAID TO COME UPON');
		}else{
			$('.text').removeClass('light');
			$('.text').removeClass('hi');
		}

	if ( ratio > 0.23){
			$('.text').addClass('dark');
			$('.text').text('SOMETHING NOT SO NICE');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}


	if ( ratio > 0.26){
			$('.text').addClass('dark');
			$('.text').text('NO WORRIES');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

		if ( ratio > 0.29){
			$('.text').addClass('dark');
			$('.text').text('NO FRETS OF ANY KIND');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.32){
			$('.text').addClass('dark');
			$('.text').text('ITS MUCH MORE COMFORTABLE');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.35){
			$('.text').addClass('dark');
			$('.text').text('FOR THE MIND');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.38){
			$('.text').addClass('dark');
			$('.text').text('DO NOT GO UP');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

if ( ratio > 0.41){
			$('.text').addClass('dark');
			$('.text').text('DO NOT GO DOWN');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

		if ( ratio > 0.44){
			$('.text').addClass('dark');
			$('.text').text('JUST STRAIGHT AHEAD');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('WHAT IS IN YOUR SIGHT?');
		}
if ( ratio > 0.47){
			$('.text').addClass('dark');
			$('.text').text('NOW TAKE THE ONES WHOSE HEADS CAN TURN');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}
if ( ratio > 0.50){
			$('.text').addClass('dark');
			$('.text').text('THEY ARE THE PEOPLE WHOSE MINDS DO YEARN');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

		if ( ratio > 0.53){
			$('.text').addClass('dark');
			$('.text').text('TO SEE HOW DEEP THE RABBIT HOLE GOES?');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}
if ( ratio > 0.56){
			$('.text').addClass('dark');
			$('.text').text('WHAT THEY WILL FIND WILL SURELY EXPOSE');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}


			if ( ratio > 0.59){
			$('.text').addClass('dark');
			$('.text').text('WHY ARE WE FILLED WITH INSECURITY');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}


			if ( ratio > 0.62){
			$('.text').addClass('dark');
			$('.text').text('SO MUCH WILL COME TO LIGHT');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.65){
			$('.text').addClass('dark');
			$('.text').text('THESE ARE THE BRAVE THAT WILL TAKE UP THE FIGHT');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.68){
			$('.text').addClass('dark');
			$('.text').text('NOW RABBIT HOLES ARE DUG DEEPER EACH DAY');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.71){
			$('.text').addClass('dark');
			$('.text').text('BY POWER THAT WANTS YOU TO HAVE NO SAY');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.74){
			$('.text').addClass('dark');
			$('.text').text('THEY WANT CONTROL OVER ALL THAT YOU ARE');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.77){
			$('.text').addClass('dark');
			$('.text').text('THEY WILL DO ALL THEY CAN TO BLOCK THE STAR');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.8){
			$('.text').addClass('dark');
			$('.text').text('THAT SHINES FOR YOU ON EVERY NIGHT');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}


			if ( ratio > 0.83){
			$('.text').addClass('dark');
			$('.text').text('THEY WOULD LOVE TO KEEP YOU AWAY FROM THAT SIGHT');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}


			if ( ratio > 0.86){
			$('.text').addClass('dark');
			$('.text').text('FOR THEN THEY HAVE GOT YOU ANF YOUR SOUL');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.89){
			$('.text').addClass('dark');
			$('.text').text('DEEP IN THE BOWELS OF THE RABBIT HOLE');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.91){
			$('.text').addClass('dark');
			$('.text').text('NOW CONTINUE THE NEVER-ENDING JOURNEY');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.94){
			$('.text').addClass('dark');
			$('.text').text('YOU HAVE ALREADY CLICKED THROUGH MINE');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.97){
			$('.text').addClass('dark');
			$('.text').text('THE TRAIL THAT IS LEFT BEHIND');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}
			if ( ratio > 0.44){
			$('.text').addClass('dark');
			$('.text').text('NOW PERMANENNTLY IN YOUR HISTORY');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.49){
			$('.text').addClass('pixel');
			$('.text').text('NEVER INTENDED TO BE SAVED');
		}else{

			$('.text').removeClass('hi');
}
			if ( ratio > 0.58){
			$('.text').addClass('pixel');
			$('.text').text('WHAT IS SEEMINGLY INCIDENTAL');
		}else{

			$('.text').removeClass('hi');
}
			if ( ratio > 0.65){
			$('.text').addClass('pixel');
			$('.text').text('INTO SOMETHING PERMENANT');
		}else{

			$('.text').removeClass('hi');
}

			



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
	});



});