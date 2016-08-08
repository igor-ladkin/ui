import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doRegister() {
      alert('Attempting to register');
    }
  }
});
