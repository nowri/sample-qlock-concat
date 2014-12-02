/* global $, _ */

var qlock = qlock || {};

qlock.TimerModel = function() {
	"use strict";
	var that = {},
		d = new Date(),
		hh,
		mm,
		ss;

	function update() {
		d = new Date();
		var _hh = d.getHours(),
			_mm = d.getMinutes(),
			_ss = d.getSeconds();
		if(_ss !== ss) {
			$(that).trigger("update", [{
				current:{
					hh:_hh,
					mm:_mm,
					ss:_ss
				},
				past:{
					hh:hh,
					mm:mm,
					ss:ss
				}
			}]);
		}
		hh = _hh;
		mm = _mm;
		ss = _ss;
	}

	that.start = function() {
		// start loop
		(function loop() {
			window.requestAnimationFrame(loop);
			update();
		})();
	};

	return that;
};
