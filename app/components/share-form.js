import Ember from 'ember';

// TODO: will need to improve the SLUGIFY stuff, quite not good right now.

export default Ember.Component.extend({
  store: Ember.inject.service(),

  slug: null,

  actions: {
    updateSlug() {
      var slug = this.get('title').toString().toLowerCase().trim()
        .replace(/[\s\W-]+/g, '-')
        .replace(/&/g, 'and')
        .replace(/-$/, '');
      this.set('slug', slug);
    },
    create() {
      var title = this.get('title');
      var description = this.get('description');
      var slug = title.toString().toLowerCase().trim()
        .replace(/[\s\W-]+/g, '-')
        .replace(/&/g, 'and')
        .replace(/-$/, ''); // remove last floating dash if exists

      var store = this.get('store');
      var idea = store.createRecord('idea', {
        title: title,
        description: description,
        slug: slug
      });

      idea.save().then((idea) => {
        this.get('finished')(idea.get('id'));
      });
    }
  }
});
