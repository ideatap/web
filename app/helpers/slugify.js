import Ember from 'ember';

export function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/&/g, 'and')
    .replace(/-$/, '');
}

export default Ember.Helper.helper(slugify);
