$(document).ready(function(){
	console.log('script loaded');

	let personality = "";
	let submitButtonId = "submit";

	let counters = {
		"whole" : 0,
		"dest" : 0,
		 "stu" : 0,
		 "cur" : 0,
		 "bor" : 0,
		 "sm" : 0,
	}
	let whole_counter = 0;

	$('#options').on('change',function(){
	console.log($(this).val());
	personality=$(this).val();

		$('#result-final').text(personality);
	});


	$('button').click(function(){
		let id = $(this).attr('id');

		counters[id] ++;

		console.log(counters);

		//calling the new funciton
		if(id == submitButtonId){
			getResult();
		} 

		// whole_counter++; 
		rayResult( id );
		updatetagline( id );
		
	});


	//WHOLE SOME 
	let lists = {
		'whole_list': [
			"Cute dog videos", 
			"Baby Animals", 
			"Motivational speeches", 
			"Babies smiling", 
			"Sunrise videos", 
			"Best chocolate chip recipes", 
			"Bob Ross painting videos", 
			"Cute cats",
			"How to make bread",
			"How to grow plants",
			"Watch disney movies online free",
			"Plant stores near me",
			"Baby platypus",
			"ASMR sleep videos",
			"Daily yoga routines",
			"Wholesome memes",
			"Bike trail near me",
			"Self care activities",
			"DIY homemade slime",
			"How to knit",

			],
		'dest_list': [
			"How to launder money",
			"Best spot to hide drugs",
			"I think I am a serial killer",
			"Where to buy a fake ID",
			"How to get away from murder",
			"Where to buy cyanide",
			"Delete search history permanant",
			"Order fake passport",
			"How to bury body",
			"Rob a bank",
			"Steal a car",
			"Make counterfeit money",
			"Buy drugs near me",
			"Sell organs for money",
			"Evade taxes without getting caught",
			"How to ATM fraud",
			"How to hack the government",
			"Shoplifting methods",
			"How many cherry pits can kill a human?",
			"Where to buy tear gas",
			"How pickpockets steal wallets",
		],
		'stu_list': [
			"Is it ilegal to kill bugs", 
			"Why do I get left and right confused?", 
			"Why do I keep on droping my phone in the toilet?", 
			"Who should I vote for reddit", 
			"Who is the prezident right now", 
			"are netflix a country", 
			"fige", 
			"how can you tell if you are stopid",
			"how to use google",
			"y is privacy important", 
			"make a million dollars in 1 day",
			"i saw santa claus",
			"will tooth fairy not give me money",
			"If i eat myself will I get twice as big or disappear completely?",
			"I swallowed an ice cube whole, and I haven’t pooped it out?",
			"What is obama last name",
			"are tattoos ginetic",
			"how do i know how old am i",
			"is chicken a fruit or vegetable",
			"i got lost looking for my lost dog",
			"how to grow 5in in a week",
			"y is there 60 hours in aday",],

		'cur_list': [
			"world's tallest dog", 
			"What is Zac efron’s blood type?", 
			"What happens when you get swallowed by a whale", 
			"World's fattest skyscraper", 
			"YouTube accounts that got banned", 
			"World's shortest cat", 
			"Richest dog in the world", 
			"What is the rarest M&M color?",
			"Lady Gaga real name",
			"What is the loudest animal on Earth?",
			"The first toy to be advertised on television",
			"Which country produces the most coffee in the world?",
			"Why do bees have five eyes",
			"Best music for plants",
			"What celebrity has their dog cloned– twice?",
			"the most expensive home in the world",
			"When will the world end",
			"the most common letter in the English alphabet?",
			"A tick bite can make you allergic to what food",
			"youngest person ever to appear on a Billboard chart",
			"Worst TV series",
			"Most viewed video",
			"Most expensive artwork",],

		'bor_list': [
			"Nearest grocery store near me", 
			"Nearest school", 
			"Best desks", 
			"Water bill is low", 
			"Travel to Idaho", 
			"How to make cabbage soup", 
			"Weather next month", 
			"Best coupons",
			"Duct tape",
			"dad jokes",
			"watch news",
			"what is my ip",
			"how to tie a tie",
			"how many ounces in a cup",
			"how to screenshot on mac",
			"how many grams in an ounce",
			"is it going to rain today",
			"how many grams in a pound",
			"how many ounces in a quart",
			"how many tablespoons in a cup",
			"what is the temperature today",
			"how many calories in a banana",
			"how many cups in a pint",
			"how to change gmail password",
			"how many steps in a mile",
			"how to backup iphone",
			"how many oz in a pound",
			"what is on tv today",
			"cut down tree",],
		'sm_list': [
			"The Collatz Conjecture", 
			"Goldbach's Conjecture﻿ Creative Commons", 
			"The Riemann Hypothesis", 
			"Are these variables dynamically conjugate, both in classical and in quantum mechanics?", 
			"The Unknotting Problem", 
			"Spacetime Wave theory", 
			"Does the pair exhibit similar principle as the position-momentum?", 
			"The Twin Prime Conjecture",
			"Copenhagen Interpretation of Quantum Mechanics",
			"The Coriolis effect",
			"Construction of phylogenetic trees",
			"Fourier transform",
			"Harmonic analyzer",
			"Paleomagnetism",
			"Biological Anthropology",
			"Schrodinger's rabid chicken",
			"The Single Theory of Gravity",
			"Higgs Boson",],
	}
	// var whole_list = [
	// 		"Cute dog videos", 
	// 		"Baby Animals", 
	// 		"Motivational speeches", 
	// 		"Babies smiling", 
	// 		"Sunshine", 
	// 		"Delicious food recipies", 
	// 		"Bob Ross painting videos", 
	// 		"Cute cats"]

	// //WHOLE SOME 
	// var dest_list = [
	// 		"test",
	// 		"test2"]


	function rayResult( listkey ) {

		let arrayname = listkey + '_list';
		console.log(arrayname);

		let array = lists[arrayname];

		let word = array[Math.floor(Math.random()*array.length)];


	  	$("#result").html('<a target="_blank" href="https://www.google.com/search?q=' + word +'">' + word + '</a>');
	  

	}

	function updatetagline( buttonID ){
		//get proper tagline for button
		console.log("update tagline is getting called");
		let taglinelist = {
			'whole': "You seem like a good person!",
			'dest': "We're keeping an eye on you!",
			'stu':"Don't worry, we're not too concerned about you...",
			'cur': "Haha, we're entertained too!",
			'bor': "Damn, wish we got a different person.",
			'sm': "You are an amazing human being!",

		};
		var tagLineWeWantToSet = ""
		tagLineWeWantToSet = taglinelist[buttonID];
		console.log(tagLineWeWantToSet);
		//set tagline on HTML object
		$("#tagline-whole").text(tagLineWeWantToSet)
	}

	function getResult(){
		console.log("getresult is called");

		//find the most clicked on
		var max = 0
		var maxKey = ""
		for (var key in counters) {
			if(counters[key]>max){
				max = counters[key]
				maxKey = key
			}
			console.log(counters[key])
		}


		//we want to create an explanation for the result
		let explanations = {
			'whole': "<br>Your interest in wholesome content means that you're sound in body, mind, and morals. You're usually the positive one in the group: you're comforting, empathetic, and reliable. Google isn't too concerned about you because you're only interested in the good of the internet! They'll rely on you to boost internet morale with memes when another Google controversy occurs! ",
			'dest': "<br>Be careful! Your destructive behavior may bite you in the butt in the future! You're usually the dangerous and reckless one in the group that everyone tries to stay away from. Don't try to delete you search history <i>(it's useless)</i> and just know that Google isn't afraid to expose you to the government-- they have CIA and NSA ties! ",
			'stu':"<br>You're usually the one who is the most gullible, innocent, and unsuspecting in the group! Your stupid searches indicate to Google that they can sell your information without being sued for privacy infringement because you'll be <i>totally</i> unaware of it. You also probably won't be too concerned about Google profiling you without consent. It's a win-win situation!",
			'cur': "<br>Your curious nature is great data for Google to use and sell in the future. You're the unpredictable one of the group whose curiousity can often lead to dangerous but exciting paths. Google struggles with creating user profiles for people like you because of the lack of consistency in searches. Nonetheless, you add exciting data for them!",
			'bor': "<br>Your interest in boring searches indicates a mundane and uninteresting lifestyle. But you're essential for Google's data collection because you represent a big chunk of the group. As a result, you are the one in the group who keeps everyone grounded. Your monotonous lifestyle may not be the most exciting but you have the most consistency when it comes to tracking IP addresses. <i>Basically, you're predictable.</i>",
			'sm':"<br>Your smart searches show us that you probably know what Google is doing with your data. You're not like the rest—you probably know that Incognito Mode doesn't work and you probably have third party apps to protect your privacy. Google sees you as the amazingly smart, multi-talented, accomplished, brilliant, polished, practiced, saavy, cool, and beautiful one of the group because Google is afraid of people like you.",
			'un':"Please click buttons to see what kind of searcher you are!",
		}
		let names = {
			'whole': "WHOLESOME",
			'dest':"DESTRUCTIVE",
			'stu':"STUPID",
			'cur':"CURIOUS",
			'bor':"BORING",
			'sm':"SMART",
			'un':"UNDEFINED",
					}


		let moreExplanation = explanations[maxKey]
		let explanation = "<br><br>Google would profile you as a   " + names[maxKey] + " searcher. " + moreExplanation 
		
		//add an HTML element that contains the result + explanation to the page
		$("#quiz-result").html('<div class="result-box"><p class="quiz">' + explanation + ' </p></div>')
	}
	

 function displayabout(){
 	document.getElementById("about_section");
}



	// rayResult ();
var tag = document.getElementById("whole");
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('demo');
});


});