import Ember from 'ember';

// TODO: get rid of localStorage
// TODO: calling 'me' insted of '1' results in two ember data objects. Which would
// both be the same except me results in an id of 'me' and the other '1'.

export default Ember.Object.extend({
  store: Ember.inject.service(),

  open(auth) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if(!auth.code) {
        return reject();
      }

      let token = decodeURIComponent(auth.code);
      localStorage.setItem('token', token);

      Ember.$.ajax({
        url: "http://localhost:4000/api/users/me",
        headers: { 'Authorization': `Bearer ${token}` },
        type: 'GET',
        success: function(data) {
          resolve({
            currentUser: data.user
          });
        },
        error: Ember.run.bind(null, reject)
      });
      //
      // this.get('store').find('user', 'me').then(function(user) {
      //   resolve({
      //     currentUser: user
      //   });
      // });
    });
  },

  fetch() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if(!localStorage.getItem('token')) {
        return reject();
      }

      let token = localStorage.getItem('token');

      Ember.$.ajax({
        url: "http://localhost:4000/api/users/me",
        headers: { 'Authorization': `Bearer ${token}` },
        type: 'GET',
        success: function(data) {
          resolve({
            currentUser: data.user
          });
        },
        error: Ember.run.bind(null, reject)
      });
    });
  },

  close() {
    let token = localStorage.getItem('token');
    localStorage.removeItem('token');

    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: "http://localhost:4000/auth/logout",
        headers: { 'Authorization': `Bearer ${token}` },
        type: 'POST',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
