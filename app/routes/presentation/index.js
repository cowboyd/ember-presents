import Ember from 'ember';
import presentation from '../../presentation';

export default Ember.Route.extend({
  redirect: function() {
    this.transitionTo('slide', presentation[0]);
  }
});
