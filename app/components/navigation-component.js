import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service('session'),
  store: Ember.inject.service(),

  actions: {
    authenticate() {
      this.get('session').open('twitter').then(function(auth) {
        
      }, function() {
        console.log("Authentication Failed");
      });
    },

    logout() {
      this.get('session').close('twitter').then(function() {
        console.log("Should be logged out!");
      });
    }
  }

});
