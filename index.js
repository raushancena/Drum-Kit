

for(var i=0; i<document.querySelectorAll(".key").length;i++)
{
	document.querySelectorAll(".key")[i].addEventListener("click",f);   //If any doubt on addEventListener see the mdn document 
}


function f()
{
	var inputNumber=this.innerHTML;
	shadowpress(inputNumber);
	g(inputNumber);


}

document.addEventListener("keypress",function(event)
	{
		g(event.key);
		shadowpress(event.key);
	});


function g(inputNumber)
{
	
	switch(inputNumber)
	{
		case "w":
			var audio = new Audio('tom-1.mp3');
			audio.play();
			break;
		case "a":
			var audio = new Audio('tom-2.mp3');
			audio.play();
			break;
		case "s":
			var audio = new Audio('tom-3.mp3');
			audio.play();
			break;
		case "d":
			var audio = new Audio('tom-4.mp3');
			audio.play();
			break;
		case "j":
			var audio = new Audio('crash.mp3');
			audio.play();
			break
		case "k":
			var audio = new Audio('kick-bass.mp3');
			audio.play();
			break;
		case "l":
			var audio = new Audio('snare.mp3');
			audio.play();
			break;

		default:
			console.log(inputNumber);

	}
	
}


function shadowpress(keyval)
{
	var temp=document.querySelector("."+keyval);
	temp.classList.add("pressed");
	setTimeout(function(){
		temp.classList.remove("pressed");
	},100);
}



















/*for mine:-

document.querySelectorAll(".key")[0].addEventListener("click",f);
document.querySelectorAll(".key")[1].addEventListener("click",g);
document.querySelectorAll(".key")[2].addEventListener("click",h);
document.querySelectorAll(".key")[3].addEventListener("click",u);
document.querySelectorAll(".key")[4].addEventListener("click",v);
document.querySelectorAll(".key")[5].addEventListener("click",x);
document.querySelectorAll(".key")[6].addEventListener("click",y);

function f()
{
	var audio = new Audio('tom-1.mp3');
	audio.play();
}

function g()
{
	var audio = new Audio('tom-2.mp3');
	audio.play();
}

function h()
{
	var audio = new Audio('tom-3.mp3');
	audio.play();
}

function u()
{
	var audio = new Audio('tom-4.mp3');
	audio.play();
}

function v()
{
	var audio = new Audio('crash.mp3');
	audio.play();
}

function x()
{
	var audio = new Audio('kick-bass.mp3');
	audio.play();
}

function y()
{
	var audio = new Audio('snare.mp3');
	audio.play();
}
*/