import Ember from 'ember';

export default Ember.Object.extend({
  open(auth) {
    console.log(auth);
  },
  close() {},
  fetch() {}
});
