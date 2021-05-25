var rays = [
			"Cute dog videos", 
			"Baby Animals", 
			"Motivational speeches", 
			"Babies smiling", 
			"Sunshine", 
			"Delicious food recipies", 
			"Bob Ross painting videos", 
			"Cute cats"]


function rayResult() {

  document.getElementById("result").innerHTML = rays[Math.floor(Math.random()*rays.length)];
  
}

rayResult ();
document.getElementById("button").onclick = rayResult;