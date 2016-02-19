import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('explore');
  this.route('share');

  this.route('login');
  this.route('signup');

  this.route('idea', { path: '/:idea_id' });

});

export default Router;
