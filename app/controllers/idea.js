import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(id) {
      this.store.findRecord('idea', id).then((idea) => {
        idea.deleteRecord();
        idea.save().then(() => {
          this.transitionToRoute('index');
        });
      });
    }
  }
});
