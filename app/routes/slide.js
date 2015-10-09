import Ember from 'ember';
import presentation from '../presentation';

export default Ember.Route.extend({
  model: function(params) {
    let descriptor = presentation.find((item)=> item === params.id);
    if (!descriptor) {
      throw new Error(`unknown slide: ${params.id}`);
    }
    return {
      slideTemplate: `slides/${params.id}`
    };
  }
});
