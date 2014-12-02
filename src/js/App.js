/* global $, _ */
var qlock = qlock || {};

(function() {
	"use strict";
	var $window = $(window),
		$container = $(".container"),
		timerModel = qlock.TimerModel();
	qlock.ContainerView($window, $container);
	qlock.MaskView($window, $container, timerModel);
	qlock.ClockView($(".clock"), timerModel);
	timerModel.start();
})();
