AngularDevConf
==============

Tools and Testring

Global requisites:
------------------

* **nodejs** (use [nvm](https://github.com/creationix/nvm) for multiple node version on the same machine)
* **grunt-cli** (npm install -g grunt-cli)

Instrucions:
------------

Cone this repo with git:

    git clone https://github.com/lele85/AngularDevConf.git

Download dev dependencies with:

	npm install

General grunt Tasks:
--------------------

	         shell  Run shell commands *
	       nodemon  Runs a nodemon monitor of your node.js server. *
	         karma  run karma. *
	         bower  Install Bower packages. *
	    protractor  A grunt task to run protractor. *

Application specific grunt aliases:
-----------------------------------
	       install  Alias for "shell:npm_install", "bower:install","shell:webdriver_update" tasks.
	      selenium  Alias for "shell:webdriver_start" task.
	        server  Alias for "nodemon:dev" task.
	          unit  Alias for "karma:unit" task.
	     unit_auto  Alias for "karma:unit_auto" task.
	           e2e  Alias for "protractor" task.

Enjoy :)