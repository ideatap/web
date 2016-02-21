import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    twitterLogin() {
      this.get('torii').open('twitter').then(function(auth) {
        console.log("Authentication Completed");
        console.log(auth);
      }, function() {
        console.log("Authentication Failed");
      });
      // this.get('session').open('twitter').then(function() {
      //   route.transitionToRoute('index');
      // }, function() {
      //   console.log("Auth Failed");
      // });
    }
  }
});
