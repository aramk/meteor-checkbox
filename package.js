Package.describe({
  name: 'aramk:checkbox',
  summary: 'A reactive checkbox widget',
  version: '0.1.0',
  git: 'https://github.com/aramk/meteor-checkbox.git'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'templating',
    'underscore',
    'jquery',
    'aramk:utility@0.8.1'
  ], 'client');
  api.use([
    'semantic:ui-css@2.0.8'
  ], 'client', {weak: true});
  api.add_files([
    'src/checkbox.html',
    'src/checkbox.js'
  ], 'client');
});
