import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  username: DS.attr('string'),
  bio: DS.attr('string'),
  image_url: DS.attr('string'),
  ideas: DS.hasMany('idea')
});
