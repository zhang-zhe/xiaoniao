window.onload=function  () {
	var bird={
		x:140,
		y:264,
		w:60,
		h:47,
	}
	


	var guandaos=[
	{ top:{x:300,y:0,w:52,h:300},
	  bottom:{x:300,y:420,w:52,h:300}
	},
	{
      top:{x:600,y:0,w:52,h:300},
	  bottom:{x:600,y:450,w:52,h:300}
	}
	]
	var ctx=document.querySelector('#canvas').getContext('2d');
    var a=1;
	var draw=function(){
		ctx.clearRect(0,0,320,568);
		//画鸟
		a+=0.02;
		bird.y+=a*a;

		var img=new Image();
		img.src='./image/xiaoniao.png';
		img.onload=function(){
		   ctx.drawImage(img,bird.x,bird.y);
		}

		// 画管道
        var img2=new Image();
        	img2.src='./image/pipe_down.png';
        	img2.onload=function(){
        		ctx.drawImage(img2,z.top.x,z.top.y,z.top.w,z.top.h);
        	}
        	
        	var img3=new Image();
        	img3.src='./image/pipe_up.png';
        	img3.onload=function(){
        		ctx.drawImage(img3,z.bottom.x,z.bottom.y,z.bottom.w,z.bottom.h);
        	}
        
        //管道左移
        for(var i=0;i< guandaos.length;i++){
        	var z=guandaos[i];
        	z.top.x-=3;
        	z.bottom.x-=3;
        	
        	ctx.drawImage(img2,z.top.x,z.top.y,z.top.w,z.top.h);
            ctx.drawImage(img3,z.bottom.x,z.bottom.y,z.bottom.w,z.bottom.h);
        	if(recvsrec(bird,z.top)||recvsrec(bird,z.bottom)){
        		
        		btn.style.display='block';
        		return;
        	}
        	if(z.top.x<=-z.top.w){
        		z.top.x=500;
        		z.bottom.x=500;

        		z.top.h=Math.random()*390+10;
        		z.bottom.h=568-z.top.h-160;
        		z.bottom.y=z.top.h+160;
        	}
        	
        }
//判断超界
		if(bird.y>568-40){
			ctx.fillRect(140,568,bird.w,bird.h);
			btn.style.display='block';
		}else if(bird.y<=0){
			ctx.fillRect(140,0,bird.w,bird.h);
			btn.style.display='block';
		}else{
			window.requestAnimationFrame(draw);
		}
		 ctx.drawImage(img,bird.x,bird.y);
		 ctx.drawImage(img2,z.top.x,z.top.y,z.top.w,z.top.h);
		 ctx.drawImage(img3,z.bottom.x,z.bottom.y,z.bottom.w,z.bottom.h);
	}
	canvas.onclick=function(){
		bird.y-=40;
		a=1;
	}
	
	requestAnimationFrame(draw);

    var btn=document.querySelector("#btn");
    btn.onclick=function(){
    	btn.style.display='none';
    	window.location.reload();
    }
    // 检测矩形之间的碰撞
    

	var recvsrec =  function(rect0,rect1){
	    if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) {
	      return false;
	    } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) {
	      return false;
	    } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) {
	      return false;
	    } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) {
	      return false;
	    }
	    return true;

	  };
}