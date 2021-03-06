

'use strict';


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
    this.log(chalk.magenta('WELCOME NARRADIANS!! You\'re using the fantastic gulp-recipe for nrd.'));

    var prompts = [{
        type: 'confirm',
        name: 'someOption',
        message: 'Do you want continue narradians?',
        default: true
    },
    {
        name: 'project',
        message: 'Your project name????'
    }
    ];

    this.prompt(prompts, function (answers) {
        var features = answers.project;

        this.projectName = answers.project;

        done();
    }.bind(this));

  },


    app: function () {
        this.directory(__dirname + '/templates', './');
    },

    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install'],
            bower: false
        })
    }

});

module.exports = GulpRecipe;

