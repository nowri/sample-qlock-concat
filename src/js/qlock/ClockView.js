/* global $, _ */

var qlock = qlock || {};

qlock.ClockView = function($clock, model) {

	"use strict";

	var that = {},
		$hh = $clock.find("#js-hh"),
		$mm = $clock.find("#js-mm"),
		$ss = $clock.find("#js-ss"),
		$hhInvert = $clock.find("#js-hh-invert"),
		$mmInvert = $clock.find("#js-mm-invert"),
		$ssInvert = $clock.find("#js-ss-invert");

	function construct() {
		$(model).on("update", render);
	}

	function render(e, data) {
		var c = data.current,
			p = data.past;
		renderText($hh, c.hh, p.hh);
		renderText($mm, c.mm, p.mm);
		renderText($ss, c.ss, p.ss);
		renderText($hhInvert, c.hh, p.hh);
		renderText($mmInvert, c.mm, p.mm);
		renderText($ssInvert, c.ss, p.ss);
	}

	function renderText($dom, current, past) {
		if(current !== past) {
			$dom.text(zeroFormat(current, 2));
		}
	}

	function zeroFormat(num, n) {
		var ret = "" + num;
		while(ret.length < n) {
			ret = "0" + ret;
		}
		return ret;
	}

	construct();
	return that;
};
