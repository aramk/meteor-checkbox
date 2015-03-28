var templateName = 'checkbox';
var TemplateClass = Template[templateName];

TemplateClass.rendered = function() {
  this.isRendered = true;
  var $checkbox = setUp();
  var data = this.data || {};
  var isChecked = !!data.checked;
  TemplateClass.setChecked($checkbox, isChecked);
};

TemplateClass.helpers({
  setUp: function() {
    getTemplate().isRendered && setUp();
  }
});

function resolveElement(domNode) {
  return $(domNode).closest('.ui.checkbox');
}

TemplateClass.isChecked = function(domNode) {
  var $em = resolveElement(domNode);
  return $('input', $em).is(':checked');
};

TemplateClass.setChecked = function(domNode, checked) {
  var $em = resolveElement(domNode);
  $em.checkbox(checked ? 'check' : 'uncheck');
};

TemplateClass.bindVarToElement = function(domNode, reactiveVar, options) {
  var $em = resolveElement(domNode);
  options = _.extend({
    setValue: function(value) {
      TemplateClass.setChecked($em, value);
    },
    getValue: function() {
      return TemplateClass.isChecked($em);
    }
  }, options);
  Templates.bindVarToElement($em, reactiveVar, options);
};

function setUp() {
  return getTemplate().$('.ui.checkbox').checkbox();
}

function getTemplate(template) {
  return Templates.getNamedInstance(templateName, template);
}
