import Ember from 'ember';
import presentation from '../presentation';

export default Ember.Route.extend({
  model: function(params) {
    if (presentation.indexOf(params.id) < 0) {
      throw new Error(`unknown slide: ${params.id}`);
    }
    return {
      slideTemplate: `slides/${params.id}`
    };
  }
});
