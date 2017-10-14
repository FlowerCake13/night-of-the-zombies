//console.log('asdfhasdfiasdifsa');
window.onload = function(){
	var start = document.getElementById('start');
	var modal = document.getElementById('modal');
	var instructions = document.getElementById('instructions');
	var instWords = document.getElementById('instWords');
	modal.style.display = 'block';
	instWords.style.display = 'none';
	instructions.onclick = function(){
		instWords.style.display = 'block';
	}
	start.onclick = function() {
		modal.style.display = 'none';
		var playerLeft = 0;
	var playerTop = 0;
	var z1;
	var arr = [];
	var interval = setInterval(spawn, 4500);
	console.log(container)
	function zombie(element, speed, height, width, left, top){
		this.element = element;
		this.speed = speed;
		this.height = height;
		this.width = width;
		this.left = left;
		this.top = top;

		this.highleft = function(){
			this.left = this.left - this.speed;
			element.style.left = this.left + 'px';
		}
		this.lowleft = function(){
			this.left = this.left + this.speed;
			element.style.left = this.left + 'px';
		}
		this.hightop = function(){
			this.top = this.top - this.speed;
			element.style.top = this.top + 'px';
		}
		this.lowtop = function(){
			this.top = this.top - this.speed;
			element.style.top = this.top + 'px';
		}
	}
	function spawn(){
		var zom = document.createElement('img');
		var zombieLeft = 300;
		var zombieTop = 300;
		var randomSpeed = Math.random()*5;
		zom.src = 'assets/zombie.png';
		zom.style.height = '50px';
		zom.style.width = '30px';
		zom.style.position = 'absolute';
		zom.style.left = zombieLeft + 'px';
		zom.style.top = zombieTop + 'px';
		z1 = new zombie(zom, randomSpeed, zom.style.height, zom.style.width, zombieLeft, zombieTop);
		arr.push(z1);
		container.appendChild(zom);
	}
	document.onkeydown = function(event){
		//console.log(event.keyCode)
		switch(event.keyCode){
			case 37:
			console.log('left');
			playerLeft = playerLeft - 10;
			player.style.left = playerLeft + 'px';
			check(arr);
			break;

			case 39:
			console.log('right');
			playerLeft = playerLeft + 10;
			player.style.left = playerLeft + 'px';
			check(arr);
			break;

			case 38:
			console.log('up');
			playerTop = playerTop - 10;
			player.style.top = playerTop + 'px';
			check(arr);
			break;

			case 40:
			console.log('down');
			playerTop = playerTop + 10;
			player.style.top = playerTop + 'px';
			check(arr);
			break;	
		}
	}
	function check(array){
		for (var i = 0; i < array.length; i++){
			if (array[i].left < playerLeft) {
				console.log('lowleft');
				array[i].lowleft();
			}
			if (array[i].left > playerLeft) {
				console.log('highleft');
				array[i].highleft();
			}
			if (array[i].top < playerTop) {
				console.log('lowtop');
				array[i].lowtop();
			}
			if (array[i].top > playerTop) {
				console.log('hightop');
				array[i].hightop();
			}
			// if (array[i] == player.getBoundingClientRect()) {
			// 	console.log("fihsafdiuhadfshuifsduhidsudsfuhidfsugfdguyifydggysdusf")
			// }
		}
	}
	}
}