'use strict';

(function () {
	var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
	var fileChoser = document.querySelector('.upload input[type=file]');
	var preview = document.querySelector('.setup-user-pic');

	fileChoser.addEventListener('change', function () {
		var file = fileChoser.files[0];
		var fileName = file.name.toLowerCase();

		var matches = FILE_TYPES.some(function (it) {
			return  fileName.endsWith(it);
		});

		if (matches) {
			var reader = new FileReader();

			reader.addEventListener('load', function (){
				preview.src = reader.result;
			});

			reader.addEventListener('onmousedown', function (){
				preview.src = reader.result;
			});

			reader.readAsDataURL(file);
		}
	});
})();