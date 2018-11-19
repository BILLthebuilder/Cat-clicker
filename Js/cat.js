(function(){
	let imageClicks = document.querySelector('.first');
	let imageClicks2 = document.querySelector('.second');
	let clicks = 0;
	let clicks2 = 0;
	function clickedItems(){
		let display = document.querySelector('.cat1');
		clicks++;
		display.innerHTML = `You have clicked Cat 1 for ${parseInt(clicks)} times`;	
	}
	imageClicks.addEventListener('click',clickedItems);

	function clickedItems2(){
		let display = document.querySelector('.cat2');
		clicks2++;
		display.innerHTML = `You have clicked Cat 2 for ${parseInt(clicks2)} times`;	
	}
	imageClicks2.addEventListener('click',clickedItems2);

	
}());