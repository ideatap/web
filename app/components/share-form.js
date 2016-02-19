import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    create() {
      var title = this.get('title');
      var description = this.get('description');
      
      var store = this.get('store');
      var idea = store.createRecord('idea', {
        title: title,
        description: description
      });

      idea.save().then((idea) => {
        this.get('finished')(idea.get('id'));
      });
    }
  }
});
