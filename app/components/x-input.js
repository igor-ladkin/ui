import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['input-field'],
  type: 'text',
  _errorMessages: computed('errors.[]', function() {
    console.log(this);
    return (this.get('errors') || []).join(', ');
  })
});
