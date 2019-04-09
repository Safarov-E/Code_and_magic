var setup = document.querySelector('.setup');

setup.classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');  
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');



setupClose.addEventListener('click', function(){
	setup.classList.add('hidden');
});
setupOpen.addEventListener('click', function(){
	setup.classList.remove('hidden');
	
	document.addEventListener('keydown', function(evt){
		if(evt.keyCode === 27) {
			setup.classList.add('hidden');
		}
	});
});

setupOpen.addEventListener('click', function(){
	setup.classList.remove('hidden');

			setup.removeAttribute('style');
	document.addEventListener('keydown', function(evt){
		if(evt.keyCode === 27) {
			setup.classList.add('hidden'); 
		}
	});
});

setupOpen.addEventListener('keydown', function(evt){
		if(evt.keyCode === 13) {
			setup.classList.remove('hidden');
		}
});
setupClose.addEventListener('keydown', function(evt){
		if(evt.keyCode === 13) {
			setup.classList.add('hidden');
		}
});

var getRandom = function(min, max){
	return Math.floor(Math.random() * (max - min)+min);
}

var wizards = [
	{
		name: 'Иван',
		coatColor: 'rgb(101, 137, 164)',
		eyesColor: 'black'
	},
	{
		name: 'Хуан Себастьян',
		coatColor: 'rgb(241, 43, 107)',
		eyesColor: 'red'
	},
	{
		name: 'Мария',
		coatColor: 'rgb(146, 100, 161)',
		eyesColor: 'blue'
	},
	{
		name: 'Кристоф',
		coatColor: 'rgb(56, 159, 117)',
		eyesColor: 'yellow'
	},
	{
		name: 'Виктор',
		coatColor: 'rgb(215, 210, 55)',
		eyesColor: 'black'
	},
	{
		name: 'Юлия',
		coatColor: 'rgb(0, 0, 0)',
		eyesColor: 'green'
	}
];

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');
for (var i =  0; i < 4; i++) {
	var wizzardElement = similarWizardTemplate.cloneNode(true);

	wizzardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
	wizzardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	console.log(wizzardElement);
	setupSimilarList.appendChild(wizzardElement);
	setupSimilar.classList.remove('hidden');
}

setupUserName.addEventListener('invalid', function(evt){
	if(setupUserName.validity.tooShort) {
		setupUserName.setCustomValidity('Имя должно быть не короче 2-х символов');
	}
	else if(setupUserName.validity.tooLong) {
		setupUserName.setCustomValidity('Имя не должно быть длинее 25 символов');
	}
	else if(setupUserName.validity.valueMissing) {
		setupUserName.setCustomValidity('Обязательное поле');
	}
	else{
		setupUserName.setCustomValidity('');
	}
})

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandom = function(arr){
	return Math.floor(Math.random() * eyesColor.length);
}
var setupWizard = document.querySelector('.setup-wizard .wizard-eyes');

setupWizard.addEventListener('click', function(){
	setupWizard.style.fill = eyesColor[getRandom(eyesColor)];
});


var faerbollColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var getRandom1 = function(arr){
	return Math.floor(Math.random() * faerbollColor.length);
}
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

setupFireballWrap.addEventListener('click', function(){
	setupFireballWrap.style.background = faerbollColor[getRandom1(faerbollColor)];
});



var coatlColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var getRandom3 = function(arr){
	return Math.floor(Math.random() * coatlColor.length);
}
var wizardCoat = document.querySelector('.wizard-coat');

wizardCoat.addEventListener('click', function(){
	wizardCoat.style.fill = coatlColor[getRandom3(coatlColor)];
});
 