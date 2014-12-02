module.exports = function(grunt) {

'use strict';

grunt.initConfig({

	/*
	 * 初期設定
	 * */
	dirs:{
		deploy:'deploy'
	},

	watch:{
		deploy:{
			files:['<%= dirs.src %>/**'],
			tasks:['deploy']
		}
	},

	/*
	 * カスタム設定
	 * */
	concat:{
		deploy:{
			src:[
				'src/js/qlock/TimerModel.js',
				'src/js/qlock/ClockView.js',
				'src/js/qlock/ContainerView.js',
				'src/js/qlock/MaskView.js',
				'src/js/qlock/App.js'
			],
			dest:'<%= dirs.deploy %>/js/main.js'
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('deploy', ['concat:deploy']);

};
