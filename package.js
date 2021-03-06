Package.describe({
  name: 'aramk:checkbox',
  summary: 'A reactive checkbox widget',
  version: '1.1.0',
  git: 'https://github.com/aramk/meteor-checkbox.git'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@1.6.1');
  api.use([
    'templating@1.3.2',
    'underscore',
    'jquery',
    'urbanetic:utility@2.0.0'
  ], 'client');
  api.use([
    'aramk:semantic-ui@2.4.1_1'
  ], 'client', {weak: true});
  api.add_files([
    'src/checkbox.html',
    'src/checkbox.js'
  ], 'client');
});
