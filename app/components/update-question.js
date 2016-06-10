import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionShow: false,
  actions: {
    updateFormShow(){
      this.set('updateQuestionShow', true);
    },
    updateQuestion(question){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes'),
        content: this.get('content'),
      };
      this.set('updateQuestionShow', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
