var isparta = require('isparta');
var metal = require('gulp-metal');

var babelOptions = {
	resolveModuleSource: metal.renameAlias,
	sourceMap: 'both'
};

module.exports = function (config) {
	config.set({
		frameworks: ['mocha', 'chai', 'sinon', 'source-map-support', 'commonjs'],

		files: [
			'bower_components/jquery/dist/jquery.js',
			'bower_components/metal/**/*.js',
			'src/**/*.js',
			'test/**/*.js'
		],

		preprocessors: {
			'src/**/*.js': ['coverage', 'commonjs'],
			'bower_components/metal/**/*.js': ['babel', 'commonjs'],
			'test/**/*.js': ['babel', 'commonjs']
		},

		browsers: ['Chrome'],

		reporters: ['coverage', 'progress'],

		babelPreprocessor: {options: babelOptions},

		coverageReporter: {
			instrumenters: {isparta : isparta},
			instrumenter: {'**/*.js': 'isparta'},
			instrumenterOptions: {isparta: {babel: babelOptions}},
			reporters: [
				{type: 'html'},
				{type: 'lcov', subdir: 'lcov'},
				{type: 'text-summary'}
			]
		}
	});
};