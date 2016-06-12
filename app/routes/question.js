import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answer').addObject(newAnswer);
      Ember.Logger.log(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transition('question', params.question);
    },
    updateQuestion(question, params) {
      // debugger;
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined){
          question.set(key, params[key]);
        }
      });
       question.save();
       this.transitionTo('index');
    },
    delete(model){
      if(confirm("Are you sure you want to delete this question?")){
        model.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
