module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-protractor-runner');

	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "client/libs"
				}
			}
		},
		shell: {
			options: {
				stdout: true
			},
			npm_install: {
				command: 'npm install'
			},
			webdriver_update: {
				command: './node_modules/.bin/webdriver-manager update'
			},
			webdriver_start: {
				command: './node_modules/.bin/webdriver-manager start'
			}
		},
		nodemon: {
			dev: {
				script: 'app.js',
				options: {
					args: ['dev'],
					nodeArgs: ['--debug'],
					env: {
						PORT: '8181'
					},
					cwd: __dirname + "/server",
					watch: ['*.js'],
					delayTime: 1,
					legacyWatch: true
				}
			}
		},
		karma: {
			unit: {
				configFile: './test/karma-unit.conf.js',
				autoWatch: false,
				singleRun: true
			},
			unit_auto: {
				configFile: './test/karma-unit.conf.js',
				autoWatch: true,
				singleRun: false
			}
		},
		protractor: {
			options: {
				keepAlive: true, // If false, the grunt process stops when the test fails.
				noColor: false, // If true, protractor will not use colors in its output.
				configFile: "./test/protractor-e2e.conf.js",
			},
			safari: {
				options: {
					args: {
						browser: "safari"
					}
				}
			},
			firefox: {
				options: {
					args: {
						browser: "firefox"
					}
				}
			},
			chrome: {
				options: {
					args: {
						browser: "chrome"
					}
				}
			},
		}
	});

	grunt.registerTask('install', ['shell:npm_install', 'bower:install']);
	grunt.registerTask('selenium', ['shell:webdriver_start']);
	grunt.registerTask('selenium_update', ['shell:webdriver_update']);
	grunt.registerTask('server', ['nodemon:dev']);
	grunt.registerTask('unit', ['karma:unit']);
	grunt.registerTask('unit_auto', ['karma:unit_auto']);
	grunt.registerTask('e2e', ['protractor']);
};