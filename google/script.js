

// function createWanderingDiv() {
//     var img, left, top, counter, interval;

//     img = document.createElement('img');

//     img.src = "1.png";

//     left = 200;
//     top  = 200;
//     img.style.position = "absolute";
//     img.style.left = left + "px";
//     img.style.top = top + "px";
//     img.style.width = "200px";  // Make these match the image...
//     img.style.height = "200px"; // ...or leave them out.

//     img.style.zIndex = 100; // Or whatever

//     document.body.appendChild(img);

//     counter = 50;
//     interval = 200; // ms
//     window.setTimeout(wanderAround, interval);

//     function wanderAround() {

//         --counter;
//         if (counter < 0)
//         {
//             // Done; remove it
//             document.body.removeChild(img);
//         }
//         else
//         {
//             // Animate a bit more
//             left += Math.floor(Math.random() * 20) - 10;
//             if (left < 0)
//             {
//                 left = 0;
//             }
//             top  += Math.floor(Math.random() * 10)  - 5;
//             if (top < 0)
//             {
//                 top = 0;
//             }
//             img.style.left = left + "px";
//             img.style.top  = top  + "px";

//             // Re-trigger ourselves
//             window.setTimeout(wanderAround, interval);
//         }
//     }
// }

// (function($){
//     $.fn.group = function() {
//         console.log(2);
//         setTimeout(showpanel, 5000)
//     }; 
//  });


function randomlinks(){
    var myrandom=Math.round(Math.random()*9)
    var links=new Array()
    links[0]="http://www.javascriptkit.com",
    links[1]="http://www.dynamicdrive.com",
    links[2]="http://www.cssdrive.com",
    links[3]="http://www.codingforums.com",
    links[4]="http://www.news.com",
    links[5]="http://www.gamespot.com",
    links[6]="http://www.msnbc.com",
    links[7]="http://www.cnn.com",
    links[8]="http://news.bbc.co.uk",
    links[9]="http://www.news.com.au",
 
    window.location=links[myrandom]

}


function group(){
    animateDiv($('.a'));
    animateDiv($('.b'));
    animateDiv($('.c'));
    animateDiv($('.d'));
    animateDiv($('.e'));
    document.getElementById("shift1").style.opacity=1;
    document.getElementById("shift2").style.opacity=1;
    document.getElementById("shift3").style.opacity=1;
    document.getElementById("shift4").style.opacity=1;
    document.getElementById("shift5").style.opacity=1;
}

function peach(){
    animateDiv($('.f'));
    animateDiv($('.g'));
    animateDiv($('.h'));
    animateDiv($('.i'));
    animateDiv($('.j'));
    document.getElementById("second1").style.opacity=1;
    document.getElementById("second2").style.opacity=1;
    document.getElementById("second3").style.opacity=1;
    document.getElementById("second4").style.opacity=1;
    document.getElementById("second5").style.opacity=1;
}

function roll(){
    animateDiv($('.k'));
    animateDiv($('.l'));
    animateDiv($('.m'));
    animateDiv($('.n'));
    animateDiv($('.o'));
    document.getElementById("second6").style.opacity=1;
    document.getElementById("second7").style.opacity=1;
    document.getElementById("second8").style.opacity=1;
    document.getElementById("second9").style.opacity=1;
    document.getElementById("second10").style.opacity=1;
}

function buyao(){
    animateDiv($('.p'));
    animateDiv($('.q'));
    animateDiv($('.r'));
    animateDiv($('.s'));
    animateDiv($('.t'));
    document.getElementById("u1").style.opacity=1;
    document.getElementById("u2").style.opacity=1;
    document.getElementById("u3").style.opacity=1;
    document.getElementById("u4").style.opacity=1;
    document.getElementById("u5").style.opacity=1;
}

// $('.right').popup();


function showOverlay(){
    // animateDiv($('.overlay'));
    $('.overlay').show()
}

function showOverlay2(){
    // animateDiv($('.overlay'));
    $('.overlay2').show()
}

function showOverlay3(){
    // animateDiv($('.overlay'));
    $('.overlay3').show()
}
function showOverlay4(){
    // animateDiv($('.overlay'));
    $('.overlay4').show()
}
function showOverlay5(){
    // animateDiv($('.overlay'));
    $('.overlay5').show()
}

$(document).ready(function() {
        setTimeout(group, 7000);
        setTimeout(peach, 12000);
        setTimeout(roll, 22000);
        setTimeout(buyao, 32000);
        setTimeout(showOverlay, 9000);
        setTimeout(showOverlay2, 15000);
        setTimeout(showOverlay3, 26000);
        setTimeout(showOverlay4, 37000);
        setTimeout(showOverlay5, 40000);
});

function makeNewPosition($container) {

    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

var queries = ['custom search', 'random', 'google', 'Brian Bennett'];
document.querySelector('button').addEventListener('click', function() {
      var cseElement = google.search.cse.element.getElement('standard0');
      var rand = Math.floor( Math.random() * queries.length);
      cseElement.execute( queries[rand] );
      }, false );

var rays = ["Ray Charles", "Ray Romano", "stingray", "Manta ray", "ray of sunshine", "Rachael Ray", "Ray (2004)", "Tampa Bay Rays"]

// console.log(rays);

// console.log("the first ray is " + rays[0]);

// console.log("there are " + rays.length + " rays");

// for (i=0; i < rays.length; i++) {
//   console.log("the list of rays contains " + rays[i]);
// }

function rayResult() {

  document.getElementById("result").innerHTML = rays[Math.floor(Math.random()*rays.length)];
  
}

rayResult ();
document.getElementById("search_button").onclick = rayResult;