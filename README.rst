MANAGEMENT.JS

  INTRO:
    Management.js is a toolkit that aims to bring the django-like management commands functionality into your nodejs apps.

    Usage of this tool is very simple and lets the user to write  'development' tasks in a super-fast way.

  SETUP:
    1. Just install managamentjs via npm in the tradional way:
      npm install managementjs

    2. Add the entry point for managementjs into your app:
      if (require('managementjs')()) {  process.exit(); }

    3. Create a folder named management:
      mkdir management

  USAGE:

    1. Once the setup is done, you can add your first management command:
      management/clean_cache.js --------

      exports.enter = function() {  }
      exports.execute = function() { console.log('Cleaning cache...'); }
      exports.exit = function() { }
      ------------------------------------

    2. Invoke your commands:
      node app.js clean_cache
    
    For more detailed information see the docs and examples.
