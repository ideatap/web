import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      ideas: this.store.findAll('idea')
    });
  }
});
