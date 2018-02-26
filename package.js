Package.describe({
  name: 'aramk:checkbox',
  summary: 'A reactive checkbox widget',
  version: '1.0.0',
  git: 'https://github.com/aramk/meteor-checkbox.git'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@1.6.1');
  api.use([
    'templating',
    'underscore',
    'jquery',
    'urbanetic:utility@2.0.0'
  ], 'client');
  api.use([
    'semantic:ui-css@2.0.8'
  ], 'client', {weak: true});
  api.add_files([
    'src/checkbox.html',
    'src/checkbox.js'
  ], 'client');
});
