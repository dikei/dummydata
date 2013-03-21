module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        outputDir: 'build/',
        exec: {
            npm_install: {
                cmd: 'npm install'
            },
            bower_install: {
                cmd: 'rm -rf components && bower install'
            },
            build_bootstrap: {
                cmd: function() {
                    return 'cd components/bootstrap && ' + 
                           'npm install && ' + 
                           'make bootstrap && ' + 
                           'cd .. && ' + 
                           'mv bootstrap/bootstrap bootstrap-build && ' + 
                           'rm -rf bootstrap && ' + 
                           'mv bootstrap-build bootstrap ';
                },
            },
            build_faker: {
                cmd: function() {
                    return 'cd components/faker && ' +
                           'npm install && ' +
                           'make build && ' +
                           'ls | grep -v Faker.js | xargs rm -rf && ' +
                           'rm -rf .??* '
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-exec');
    
    //Install dependencies tasks
    grunt.registerTask('deps', 'Install dependencies with npm and bower', function(){
        console.log('Installing dependencies... ');
        
        //Install with npm
        grunt.task.run('exec:npm_install');
        
        //Install with bower
        grunt.task.run('exec:bower_install');
        
        //Build bootstrap
        grunt.task.run('exec:build_bootstrap');

        //Build faker.js
        grunt.task.run('exec:build_faker');
    });
    
    
};