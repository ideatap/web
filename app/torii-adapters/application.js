import Ember from 'ember';

export default Ember.Object.extend({
  open(auth) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if(!auth.code) {
        reject();
      }

      localStorage.setItem('token', auth.code);
      resolve({
        currentUser: {
          username: "something",
          name: "Test Person"
        }
      });
    });
  },

  fetch() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if(!localStorage.getItem('token')) {
        reject();
      }

      resolve({
        currentUser: {
          username: "something",
          name: "Test Person"
        }
      });
      // find the user in the store.
    });
  },

  close() {
    let token = localStorage.getItem('token');
    localStorage.removeItem('token');

    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: "http://localhost:4000/auth/logout",
        headers: { 'Authorization': token },
        type: 'POST',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
