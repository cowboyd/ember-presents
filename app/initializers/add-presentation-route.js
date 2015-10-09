import Router from '../router';

export default {
  name: 'add-presentation-routes',
  initialize: function() {
    Router.map(function() {
      this.resource('presentation', {path: '/'}, function () {
        this.resource('slide', {path: '/:id'});
      });
    });
  }
};
