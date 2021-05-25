	
	// drag images
	function startDrag(e) {
				// determine event object
				if (!e) {
					var e = window.event;
				}

				// IE uses srcElement, others use target
				var targ = e.target ? e.target : e.srcElement;

				if (targ.className != 'dragme') {return};
				// calculate event X, Y coordinates
					offsetX = e.clientX;
					offsetY = e.clientY;

				// assign default values for top and left properties
				if(!targ.style.left) { targ.style.left='0px'};
				if (!targ.style.top) { targ.style.top='0px'};

				// calculate integer values for top and left 
				// properties
				coordX = parseInt(targ.style.left);
				coordY = parseInt(targ.style.top);
				drag = true;

				// move div element
					document.onmousemove=dragDiv;
				
			}
			function dragDiv(e) {
				if (!drag) {return};
				if (!e) { var e= window.event};
				var targ=e.target?e.target:e.srcElement;
				// move div element
				targ.style.left=coordX+e.clientX-offsetX+'px';
				targ.style.top=coordY+e.clientY-offsetY+'px';
				return false;
			}
			function stopDrag() {
				drag=false;
			}
			window.onload = function() {
				document.onmousedown = startDrag;
				document.onmouseup = stopDrag;
			}
import "./styles.css"
import rAF, { subscribeUpdate } from "raf-handler"
import VirtualScroll from "virtual-scroll"

rAF() // start animationFrameRequest centralized

const section = document.querySelector(".section")
const text = document.querySelector(".text")

const { innerHeight } = global
const offset = 0 // offset start / limit min translate
const scroll = { current: 0 } // current value
const target = { current: 0 } // target value
const ease = 0.18 // less = smoother
const maxTarget = -(section.clientHeight - innerHeight) // limit max translate

const update = () => {
  scroll.current += (target.current - scroll.current) * ease // lerp (😍)

  section.style.transform = `translateY(${scroll.current}px)`
  text.style.transform = `translateY(${-scroll.current}px)`

  text.style.setProperty("--font-weight", (scroll.current / maxTarget) * 800)
  text.style.setProperty("--font-width", (scroll.current / maxTarget) * 100)
}
subscribeUpdate(update)

const vScroll = new VirtualScroll({
  mouseMultiplier: 0.07,
  touchMultiplier: 1.8,
  preventTouch: true
})

vScroll.on(e => {
  target.current += e.deltaY // delta wheel normalized (from vistual scroll)
  target.current = Math.max(maxTarget, target.current) // limit max translate
  target.current = Math.min(offset, target.current) // limit min translate
})





			