import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    save(){
      var params = {
        title:this.get('title'),
        author:this.get('author'),
        content:this.get('content'),
        notes:this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    },
    newQuestionFormShow(){
      this.set('addNewQuestion', true);
    }
  }
});
