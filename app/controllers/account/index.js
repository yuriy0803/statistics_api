import Controller from '@ember/controller';
import { inject } from '@ember/controller';
import { computed } from '@ember/object';
import config from '../../config/environment';

export default Controller.extend({  
  get config() {
        return config.APP;
    }
});
