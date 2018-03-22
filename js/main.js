
TweenMax.to(".background", 3,{backgroundImage:"radial-gradient(circle at 250px 250px, #805370, #674E75, #3B4372, #2C2F5A, black)",repeat:-1, yoyo:true})


window.onload = function() {
	  function clock(){
	    var time = new Date();
	    var hours = time.getHours();
	    var minutes = time.getMinutes();
	    var seconds = time.getSeconds();
	    var day = time.getDate();
	    var month = time.getMonth();
	    var year = time.getFullYear();

		var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
	    //document.getElementsByClassName("clock")[0].innerHTML = time;
	    document.getElementsByClassName('clock')[0].innerHTML = monthNames[time.getMonth()] + ", " + day + " " + year;
	    document.getElementsByClassName('time')[0].innerHTML = hours + " : " + minutes + " : " + seconds ;

	}

	//we willen de bijbehorende maand koppelen aan een woord


const d = new Date();
              clock();

  setInterval(function(){

               clock();

  }, 1000);


	function generateStars(){
		var aantalSterren = 200;
		for(var i=0; i<aantalSterren; i++){
			var element = document.createElement("p");
			element.setAttribute('class', 'star');
			element.innerHTML += '&#9733;';
		    //element.appendChild(document.createTextNode('&#x2660;'));
			var xy = getRandomPos();
			element.style.top = xy[0] + 'px';
			element.style.left = xy[1] + 'px';
		    document.getElementsByClassName('stars')[0].appendChild(element);
		}
		//40 sterren maken
		//40 sterren herpositioneren
		//X en Y
		




	}


function getRandomPos(){

	    var w = window.innerWidth;
    	var h = window.innerHeight;
		console.log(w,h);

		var randomX = Math.floor(Math.random()* w);
		var randomY = Math.floor(Math.random()* h);

		return [randomX,randomY];
}


	function placeStars(){

		var img = document.createElement('img');

		img.setAttribute("style", "position:absolute;");
		img.setAttribute("border", "solid 2px red;");

		document.body.appendChild(img);
		var xy = getRandomPos(img);
		img.style.top = xy[0] + 'px';
		img.style.left = xy[1] + 'px';
	}
	generateStars();

}



//MOON 
TweenMax.from(".moon", 3, {opacity:0, y: 20, rotation:90,  repeat:-1, yoyo:true});

//SHADOW
TweenMax.to(".time, .clock", 3, {textShadow:"0 0 10px rgba(10, 175, 230, 1), 0 0 4px rgba(10, 175, 230, 0)",repeat:-1,yoyo:true});

//STAR ANIMATION
TweenMax.staggerFrom(".stars", 3, {opacity:0, repeat:-1,yoyo:true});


