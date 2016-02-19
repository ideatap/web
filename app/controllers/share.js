import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    show(id) {
      this.transitionToRoute('idea', id);
    }
  }
});
