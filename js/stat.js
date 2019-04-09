	var renderCloud = function(ctx, color, x, y){ 
		ctx.fillStyle = color;
		ctx.fillRect( x, y, 420, 270);
	};

	var renderText = function(ctx, color, text, x, y){
		ctx.font = '16px PT Mono';
		ctx.fillStyle = color;
		ctx.fillText(text, x, y);
	};

	var gistogramma = function(ctx, x, y, height, color){
		ctx.fillRect(x, y, 40, height);
		ctx.fillStyle = color;
	} 

	var time = function(array){
		var max = array[0];
		 for(var i = 1; i < array.length; i++)
		 {
		 	if(max < array[i])
		 	{
		 		max = array[i];
		 	}
		 }
		 return max;
	}
 //var x = time(times) / 150 * times[i];


window.renderStatistics = function(ctx, names, times){
	
	renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
	renderCloud(ctx, '#fff', 100, 10);
	renderText(ctx, '#000', 'Ура выпобедили!', 120, 50);
	renderText(ctx, '#000', 'Список результатов:', 120, 70);

		for(var i = 0, j = 0; i < times.length; i++, j += 100)
		{
			//var x = time(times) /  150 * times[i];
			var x = (times[i] * 150) / time(times);
			console.log(x)
			gistogramma(ctx, 140+j, (100 - x + 150), x, 'rgba(255, 0, 0, 1)');
			renderText(ctx, 'green', names[i], 140+j, 270);
		}
};
 