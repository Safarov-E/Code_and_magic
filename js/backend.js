'use strict';
(function(){
	window.backend = {
		load: function(url, onSuccess, onError){
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.addEventListener('load', function(){
				if(xhr.status == 200){
					onSuccess(xhr.response);
				}else{
					onError("Статус ответа : " + xhr.status + " " + xhr.statusText);
				}
			});

			xhr.addEventListener('error', function(){
				onError('Произошла ошибка соединения');
			});

			xhr.addEventListener('timeout', function(){
				onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
			});

			xhr.timeout = 10000; // 10 seconds

			xhr.open('GET', url);
			xhr.send();
		},

		upload: function(url, data, onSuccess){
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';

			xhr.addEventListener('load', function(){
				onSuccess(xhr.response);
			});

			xhr.open('POST', url);
			xhr.send(data);
		}
	};
})(); 