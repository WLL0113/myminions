
	var btn1 = document.getElementById("btn1");
	btn1.onclick = function(){
	// eyemove button
	var count = 0;
	var eyebmove1 = document.getElementById("eyeb1-move");
	var eyebmove2 = document.getElementById("eyeb2-move");
		if(isclick = true){
			count++
			setTimeout(function() {
				eyebmove1.style.cssText = "animation: eyebmove 1s;";
				eyebmove2.style.cssText = "animation: eyebmove 1s;";
			},0);
		}
		
		if( count == 1){
			count--
			eyebmove1.style.cssText = "";
			eyebmove2.style.cssText = "";
		}
	};


	var btn2 = document.getElementById("btn2");
	btn2.onclick = function(){
	// drink button
		var shoe = document.getElementById("shoe-l-move");
				shoe.style.cssText = "animation: shoeleft 0.5s ;"


	};






