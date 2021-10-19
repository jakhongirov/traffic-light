const elStopBtn = document.querySelector('.stop__btn');
const elTrafficLight = document.querySelector('.tarffic-light');
const elRedLight = document.querySelector('.red');
const elYellowLight = document.querySelector('.yellow');
const elGreenLight = document.querySelector('.green');
const elImg = document.querySelector('.img');

function startTrafficLight() {
	setTimeout(() => {
		elRedLight.style.backgroundColor = 'red'
		elImg.classList.remove('image');
	}, 1000);

	setTimeout(() => {
		elRedLight.style.backgroundColor = 'grey'
	}, 10500);

	setTimeout(() => {
		elRedLight.style.backgroundColor = 'red'
	}, 11000);

	setTimeout(() => {
		elRedLight.style.backgroundColor = 'grey'
	}, 11500);

	setTimeout(() => {
		elRedLight.style.backgroundColor = 'red'
	}, 12000);

	setTimeout(() => {
		elRedLight.style.backgroundColor = 'grey'
	}, 12500);

	setTimeout(() => {
		elYellowLight.style.backgroundColor = 'yellow'
	}, 13000);

	setTimeout(() => {
		elYellowLight.style.backgroundColor = 'grey'
	}, 15000);

	setTimeout(() => {
		elGreenLight.style.backgroundColor = 'green'
		// elImg.style.marginLeft = '110px'
	}, 15500);


	setTimeout(() => {
		elImg.classList.add('image');
	}, 16000);

	setTimeout(() => {
		elGreenLight.style.backgroundColor = 'grey'
	}, 19000);

	setTimeout(() => {
		elGreenLight.style.backgroundColor = 'green'
	}, 19500);

	setTimeout(() => {
		elGreenLight.style.backgroundColor = 'grey'
	}, 20000);
	
}

startTrafficLight();

 setInterval(() => {
	startTrafficLight();
}, 20000);





// elModal.addEventListener('click', (evt)=>{
//    if(evt.target.matches('.btn')){
//       elModal.style.display = 'none'
//    }else if(evt.target.matches('.box')){
//       elModal.style.display = 'none'
//    }
// })

elStopBtn.addEventListener('click', () => {
	clearTimeout(startTrafficLight());
});
