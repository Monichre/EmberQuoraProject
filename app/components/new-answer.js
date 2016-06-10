import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    newAnswerFormShow(){
      this.set('newAnswerForm', true);
    },
    saveAnswer(){
      var params = {
        author:this.get('author'),
        answerContent: this.get('answerContent'),
        question:this.get('question'),
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
