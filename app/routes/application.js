import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  }
});
