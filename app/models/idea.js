import DS from 'ember-data';

// slug
// belongsTo 'user'
// hasMany 'category'
// participating or whatever..

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  slug: DS.attr('string'),
  user: DS.belongsTo('user')
});
