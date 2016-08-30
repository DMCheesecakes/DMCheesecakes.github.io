'use strict';

var img = $('#jumbotron-img')[0];

var state = 1;
var changeImage = function () {
	if (state === 6) {
		var futureState = 1;
	} else {
		var futureState = state + 1;
	}
	var src = img.getAttribute('src').toString();
	var statestr = state.toString();
	var futureStatestr = futureState.toString();
	console.log(statestr);
	console.log(futureStatestr);
	src = src.replace(statestr, futureStatestr);
	console.log(src);
	img.setAttribute('src', src);
	state = futureState;
}

setInterval(changeImage, 2000);

changeImage();