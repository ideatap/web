import Ember from 'ember';
import DS from 'ember-data';

// TODO: JSONAPI???
export default DS.RESTAdapter.extend({
  host: 'http://localhost:4000',
  namespace: 'api',
  headers: Ember.computed(function() {
    if(!localStorage.getItem('token')) { return; }
    return {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    };
  })
});
