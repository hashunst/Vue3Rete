import { Control } from 'rete';
import VueButtonControl from './ButtonControl.vue'
export default class ButtonControl extends Control {

    constructor(emitter, key, value, onClick, isDisabled) {
      super(key);
      this.component = VueButtonControl;
      this.props = { emitter, ikey: key, value, isDisabled , onClick: onClick}
    }

    setValue(val) {
      this.vueContext.value = val;
    }
  }