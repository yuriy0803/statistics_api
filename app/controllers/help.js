import Controller from '@ember/controller';
import { inject } from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  applicationController: inject.controller('application'),
  config: computed.reads('applicationController.config')
});
