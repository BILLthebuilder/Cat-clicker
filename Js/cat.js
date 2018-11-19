(function(){
	let clicks = 0;
	let imageClicks = document.querySelector('img');
	let display = document.querySelector('p');
	
	imageClicks.addEventListener('click',()=>{
		clicks++;
		display.innerHTML = `You have clicked this cat for ${parseInt(clicks)} times`;	
	},false);
	
}());