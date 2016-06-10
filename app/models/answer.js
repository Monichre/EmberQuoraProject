import Model from 'ember-data';

export default DS.Model.extend({
  author:DS.attr(),
  answerContent:DS.attr(),
  question:belongsTo('question', {async:true})

});
