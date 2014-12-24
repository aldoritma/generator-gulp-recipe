'use strict';

var util    = require('util');
var path    = require('path');
var yeoman  = require('yeoman-generator');
var chalk   = require('chalk');

var GulpRecipe = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

  askFor: function(){
    var done = this.async();

    // Yeoman greet the user
    this.log(this.yeoman);

    // description self generator
    this.log(chalk.magenta('You\'re using the fantastic gulp-recipe for nrd.'));

    var prompts = [{
        type: 'confirm',
        name: 'someOption',
        message: 'Continue?',
        default: true
    }];

    this.prompt(prompts, function (props) {
        this.someOption = props.someOption;

        done();
    }.bind(this));

  },

  app: function(){

    this.directory(__dirname + '/templates', './');
  }

/*
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the supreme' + chalk.red('GulpRecipe') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Continue?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
  */
});

module.exports = GulpRecipe;
