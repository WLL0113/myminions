	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");
	var btn5 = document.getElementById("btn5");
	var btn6 = document.getElementById("btn6");
	var btn7 = document.getElementById("btn7");
	var btn8 = document.getElementById("btn8");

	var content = document.getElementsByClassName("content")[0];
	var pantlegl = document.getElementsByClassName("pantleg-l-body-cover")[0];
	var pantlegr = document.getElementsByClassName("pantleg-r-body-cover")[0];

	var hair = document.getElementById("hair-move");
	var hair1 = document.getElementById("hair1-move");
	var hair2 = document.getElementById("hair2-move");
	var body = document.getElementById("body-move");

	var eyebmove1 = document.getElementById("eyeb1-move");
	var eyebmove2 = document.getElementById("eyeb2-move");

    var shoe = document.getElementById("shoe-l-move");

    var handl = document.getElementById("hand-l-move");
	var handr = document.getElementById("hand-r-move");

	function bind(obj,eventStr,callback){
		if(obj.addEventListener){
			obj.addEventListener(eventStr,callback,false);
		}else {
			obj.attachEvent("on"+eventStr,function(){
				callback.call(obj);
			});
		}
	}

	function EndAnimation(name) {
		//清除animation中的动画
		name.addEventListener("animationend",function() {
			this.style.animation = ""
		});
	}

	function PausedMove(name){
 		name.style.animation = "paused"
 	}


 	bind(btn1,"click",function (){
	// eyemove button
		eyebmove1.style.animation = "eyebmove 1.5s ";
		eyebmove2.style.animation = "eyebmove 1.5s ";
	//结束时清空anmation 
		EndAnimation(eyebmove1);
		EndAnimation(eyebmove2);
	})


	
	bind(btn2,"click",function (){
		//shoemove button
		shoe.style.animation = "shoeleft 1.5s "
		EndAnimation(shoe);
	})

	
	bind(btn3,"click",function (){

		handl.style.animation = "handleft 1.5s "
		handr.style.animation = "handright 1.5s "
		
		EndAnimation(handl);
		EndAnimation(handr);
	})


	bind(btn4,"click",function(){

		hair.style.animation = "hairmove 1.5s "
		hair1.style.animation = "hairmove 1.5s "
		hair2.style.animation = "hairmove 1.5s "
		body.style.animation = "bodymove 1.5s "
		
		EndAnimation(hair);
		EndAnimation(hair1);
		EndAnimation(hair2);
		EndAnimation(body);
	})


	
	bind(btn5,"click",function(){
		var r,g,b;

		r = Math.floor(Math.random()*255);
		g = Math.floor(Math.random()*255);
		b = Math.floor(Math.random()*255);
		
		var bgColor = "rgb(" + r + ","+ g + "," + b + ")"
		
		setTimeout(function(){
			content.style.background = bgColor;
			pantlegr.style.background = bgColor;
			pantlegl.style.background = bgColor;
		},0)

	})




	bind(btn6,"click",function(){

			window.onmousemove = function () {
				//获取content内坐标
				var x = event.clientX;
				var y = event.clientY;
				//手移动
				var a,b,c,cosB,z;
				a = Math.pow((690-x),2);
				b = Math.pow((360-y),2);
				c = a+b;
				sinB = Math.sqrt(b/c)
				//反正弦值
				z=Math.asin(sinB);
				//求角度
				angleB = (z*360)/(2*Math.PI)

				//控制x移动
				eyebmove1.style.left = Math.floor(2*x/100) + "px" ;
				eyebmove2.style.left = Math.floor(2*x/100) + "px" ;
				//控制y移动
				eyebmove1.style.top = Math.floor(3*y/100) + "px" ;
				eyebmove2.style.top = Math.floor(3*y/100) + "px" ;

				var rot = Math.floor(angleB)
				if( y < 360){
					handl.style.transform = "rotate( " + (rot+90) + "deg)"
					handr.style.transform = "rotate( " + (-(rot+90)) + "deg)"
				}
				else { 
					handl.style.transform = "rotate( " + (90-rot) + "deg)"
					handr.style.transform = "rotate( " + (-(90-rot)) + "deg)"
				}
			};

	})

	bind(btn4,"click",function(){

		eyebmove1.style.animation = "eyebmove 1.5s infinite"
		eyebmove2.style.animation = "eyebmove 1.5s infinite"
		shoe.style.animation = "shoeleft 1.5s infinite"
		handl.style.animation = "handleft 1.5s infinite"
		handr.style.animation = "handright 1.5s infinite"
		hair.style.animation = "hairmove 1.5s infinite"
		hair1.style.animation = "hairmove 1.5s infinite"
		hair2.style.animation = "hairmove 1.5s infinite"
		body.style.animation = "bodymove 1.5s infinite"
		
	})


	bind(btn8,"click",function(){

		PausedMove(eyebmove1)
		PausedMove(eyebmove2)
		PausedMove(hair)
		PausedMove(hair1)
		PausedMove(hair2)
		PausedMove(body)
		PausedMove(handr)
		PausedMove(handl)
		PausedMove(shoe)
		
		
		window.onmousemove = function () {
				//获取content内坐标
			eyebmove1.style.left = 10 + "px" ;
			eyebmove2.style.left = 10 + "px" ;
			//控制y移动范围
			eyebmove1.style.top = 10 + "px" ;
			eyebmove2.style.top = 10 + "px" ;
			
			};

	})

	
	
		
	
	


