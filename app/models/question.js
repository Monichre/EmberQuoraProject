import Model from 'ember-data';

export default DS.Model.extend({
  title:DS.attr(),
  author:DS.attr(),
  notes:DS.attr(),
  content:DS.attr(),
  answers:hasMany('answer', {async:true})

});
