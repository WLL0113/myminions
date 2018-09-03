
	var btn1 = document.getElementById("btn1");
	btn1.onclick = function (){
	// eyemove button
	var count = 0;
	var eyebmove1 = document.getElementById("eyeb1-move");
	var eyebmove2 = document.getElementById("eyeb2-move");
		if(isclick = true){
			count++;
			setTimeout(function () {
				eyebmove1.style.animation = "eyebmove 1.5s 2";
				eyebmove2.style.animation = "eyebmove 1.5s 2";
			},0);
		}
		
		if( count == 1){
			count--;
			eyebmove1.style.animation = "";
			eyebmove2.style.animation = "";
		}
	};


	var btn2 = document.getElementById("btn2");
	btn2.onclick= function() {
		//shoemove button
		var shoe = document.getElementById("shoe-l-move");
		var count = 0;
		if(isclick = true){
			count++;
			setTimeout(function () {
			shoe.style.animation = "shoeleft 1.5s 2"
			},0)
		}
		
		if( count == 1){
			count--;
			shoe.style = "";
		}
	};

	var btn3 = document.getElementById("btn3");
	btn3.onclick= function() {
		var handl = document.getElementById("hand-l-move");
		var handr = document.getElementById("hand-r-move");
		var count = 0;
		if(isclick = true){
			count++
			setTimeout(function(){
			handl.style.animation = "handleft 1.5s 2"
			handr.style.animation = "handright 1.5s 2"
			},0)
		}
		
		if( count == 1){
			count--
			handl.style = ""
			handr.style = ""
		}
	};


	var btn4 = document.getElementById("btn4");
	btn4.addEventListener("click",function(){
		var r,g,b;
		var content = document.getElementsByClassName("content")[0];
		var pantlegl = document.getElementsByClassName("pantleg-l-body-cover")[0];
		var pantlegr = document.getElementsByClassName("pantleg-r-body-cover")[0];

		r = Math.floor(Math.random()*255);
		g = Math.floor(Math.random()*255);
		b = Math.floor(Math.random()*255);
		
		var bgColor = "rgb(" + r + ","+ g + "," + b + ")"
		
		setTimeout(function(){
			content.style.background = bgColor;
			pantlegr.style.background = bgColor;
			pantlegl.style.background = bgColor;
		},0)

	},false)

    var btn5 = document.getElementById("btn5");
	btn5.onclick= function() {
		var x = document.getElementsByTagName("link")[2];
		document.getElementById("p").innerHTML = x.innerHTML;
	};



	var btn6 = document.getElementById("btn6");
	btn6.addEventListener("click",function(){
		btn1.onclick();
		btn2.onclick();
		btn3.onclick();
	},false);
	





