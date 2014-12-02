/* global $, _ */

var qlock = qlock || {};

// fit window on resize
qlock.ContainerView = function($window, $container) {

	"use strict";

	var $resizeContainer;

	function construct() {
		$resizeContainer = $container.find(".js-full-resize");
		$window
			.resize(_.throttle(resize, 100))
			.trigger("resize");
	}

	function resize() {
		var w = $window.width(),
			h = $window.height();
		$resizeContainer
			.css({
				width:w + "px",
				height:h + "px"
			});
	}

	$(construct);
};

