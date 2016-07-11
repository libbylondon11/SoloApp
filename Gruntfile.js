module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       uglify: {
                 my_target:{
                   files:[{
                     expand: true,
                     cwd: 'client',
                     src: '*.js',
                     dest: 'server/public/assets/scripts'
                   }]
                 }
              },
       uglify: {
           options: {
               banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
           },
           build: {
               src: 'client/client.js',
               dest: 'server/public/assets/scripts/client.min.js'
           }
       },
       copy: {
           main: {
               expand: true,
               cwd: "node_modules/",
               src: [
                   "angular/angular.min.js",
                   "angular-route/angular-route.min.js",
                   "angular/angular-csp.css",
                   "angular-material-data-table/dist/md-data-table.css",
                   "angular-material-data-table/dist/md-data-table.min.js",
               ],
               "dest": "server/public/vendors/"
           }
       },
  sass: {
    dist: {
      options: {

        // includePaths: require('node-bourbon').includePaths

      },
      files: {
        'server/public/views/style.css': 'server/public/views/application.scss'
      }
    }
  }
});

   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-sass');
  //  grunt.loadNpmTasks('grunt-contrib-watch');

   // Default task(s).
   grunt.registerTask('default', ['copy', 'uglify', 'sass']);

};
