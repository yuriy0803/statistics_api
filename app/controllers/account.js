import Controller from '@ember/controller';
import { inject } from '@ember/controller';
import { computed } from '@ember/object';
import config from '../config/environment';

export default Controller.extend({
  applicationController: inject('application'),
  stats: computed.reads('applicationController.model.stats'),
  config: computed.reads('applicationController.config'),

  
    roundPercent: computed('stats', 'model', {
    get() {
      let percent = this.get('model.roundShares') / this.get('stats.roundShares');
      if (!percent) {
        return 0;
      }
      if(percent>100){
          return 100;
      }
          
      return percent;
    }
  }),
  
  
  payoutthreshold: computed('model', {
    get() {
      var defaultThreshold = config.APP.PayoutThreshold;
      var threshold = this.getWithDefault('model.stats.payoutthreshold',defaultThreshold);
        return threshold;
    }
  }),
  
  
  paymentPercent: computed('model',{
    get() {
      var defaultThreshold = config.APP.PayoutThreshold;
      defaultThreshold =defaultThreshold * 1000000000;
      var threshold = this.getWithDefault('model.stats.payoutthreshold',defaultThreshold);
      var balance = this.get('model.stats.balance');
            
      var percent = 100;
      threshold = threshold * 0.000000001;
      balance = balance * 0.000000001;
      
      
      
      percent = (balance * 100) / threshold ;
      
      if (!percent) {
        return 0;
      }
      else if(percent>100){
          return 100;
      }
      else{
           return percent.toFixed(2);
      }
          
      return percent.toFixed(2);
    }
  })
});
