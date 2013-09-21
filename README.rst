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
      management/clean_cache.js:

      exports.enter = function() {  }
      
      exports.execute = function() { console.log('Cleaning cache...'); }
      
      exports.exit = function() { }

    2. Invoke your commands:
      node app.js clean_cache
    
    For more detailed information see the docs and examples.
    
    
   API:
    
    Command Structure: 
    
      A command is just a module that could export any of the following  functions:

        1. options: function(commander) { ... }.
          This function receives a commander 'Command' instance. It has the purpose of configure the command line parser.
          See the examples and Commander documentation for more details.
        2. enter: function(args) { }.
        3. execute: function(args) { }
        4. exit: function(args) { }
      
      
    Initialization:
      To initialize the engine you just need to import and call the initialization function:
      
      - require('managementjs')([options]);
      
        - options: is an object, if given it could contain the following arguments:
          
          - dispatch: boolean. If true the the management command engine is executed automatically.
          
          - settings: object.
          
            - commandsDir: string. An alternative route to hold the management commands. (Defaults to 'management')
        
      When the engine is executed (by calling without arguments or using dispatch:true),  then it analizes command line arguments and tries to execute a management command.
      If any command is executed then true is returned, otherwise returns false.
