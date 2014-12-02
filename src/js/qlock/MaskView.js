/* global $, _ */

var qlock = qlock || {};

qlock.MaskView = function($window, $container, model) {
	"use strict";
	var $maskA = $("#js-mask-clock"),
		$maskB = $("#js-mask-clock-invert"),
		count = 0;

	function construct() {
		$(model)
			.on("update", function(e, sec) {
				changeView();
			});
	}

	function changeView() {
		switch(++count) {
			case 1:
				changeZ($maskA, 5);
				changeZ($maskB);
				reset($maskA, "width", "100%");
				reset($maskA, "height", "100%");
				reset($maskB, "width", "100%");
				reset($maskB, "height", "100%");
				anim($maskB, "width", "0%");
				break;

			case 2:
				changeZ($maskA);
				changeZ($maskB, 5);
				reset($maskB, "width", "100%");
				reset($maskB, "height", "100%");
				anim($maskA, "height", "0%");
				break;

			case 3:
				changeZ($maskA);
				reset($maskA, "width", "0%");
				reset($maskA, "height", "100%");
				anim($maskA, "width", "100%");
				break;

			case 4:
				changeZ($maskB);
				changeZ($maskA, 5);
				reset($maskB, "width", "100%");
				reset($maskB, "height", "0%");
				anim($maskB, "height", "100%");
				break;

			case 5:
				reset($maskA, "width", "100%");
				reset($maskA, "height", "100%");
				anim($maskB, "width", "0%");
				break;

			case 6:
				changeZ($maskA);
				changeZ($maskB, 5);
				reset($maskB, "width", "100%");
				reset($maskB, "height", "100%");
				anim($maskA, "height", "0%");
				break;

			case 7:
				changeZ($maskB, 5);
				changeZ($maskA);
				reset($maskA, "width", "0%");
				reset($maskA, "height", "100%");
				anim($maskA, "width", "100%");
				break;

			case 8:
				changeZ($maskB);
				changeZ($maskA, 5);
				reset($maskB, "width", "100%");
				reset($maskB, "height", "0%");
				anim($maskB, "height", "100%");
				count = 0;
				break;
			default:
		}

	}

	function anim($mask, key, value) {
		var obj = {},
			time = 500;
		obj[key] = value;
		if(key === "height") {
			time = time / $window.width() * $window.height();
		}
		$mask
			.stop()
			.animate(obj, time, "easeOutExpo");
	}

	function changeZ($current, index) {
		index = index || 10;
		$(".z" + index).removeClass("z" + index);
		$current.addClass("z" + index);
	}

	function reset($mask, key, value) {
		var obj = {};
		obj[key] = value;
		$mask.stop();
		$mask.css(obj);
	}

	construct();

};

