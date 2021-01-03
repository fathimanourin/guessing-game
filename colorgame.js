var numberofsqrs=6;
var colors=generaterandomcolor(numberofsqrs);
var squares = document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	messagedisplay.textContent="";
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberofsqrs=3;
	colors=generaterandomcolor(numberofsqrs);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	messagedisplay.textContent="";
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberofsqrs=6;
	colors=generaterandomcolor(numberofsqrs);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});
reset.addEventListener("click",function(){
		this.textContent="New Colors";
		messagedisplay.textContent="";
		//generate all new colors
		colors=generaterandomcolor(numberofsqrs);
		//pick a new color fromarray
		pickedcolor=pickcolor();
		//change colors of squares
		colordisplay.textContent=pickedcolor;
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.background=colors[i];
		}
		h1.style.backgroundColor="steelblue";
});
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor)
		{
			messagedisplay.textContent="Correct!!";
			reset.textContent="Play Again?";
			changecolors(clickedcolor);
			h1.style.backgroundColor=clickedcolor;

		}
		else
		{
			this.style.backgroundColor="steelblue";
			messagedisplay.textContent="Try Again!!";
		}
	});
}

colordisplay.textContent=pickedcolor;

function changecolors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generaterandomcolor(num){
	var arr=[];

	for(var i=0;i<num;i++)
	{
		arr[i]=randomcolor();
	}

	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}