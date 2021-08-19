<template>
<button 
:disabled='isDisabled'
@click="onClick"
>
    {{value}}
</button>
<!-- <input
  type="number"
  :readonly="readonly"
  :value="value"
  @input="change($event)"
  @dblclick.stop=""
  @pointerdown.stop=""
  @pointermove.stop=""
/> -->
</template>

<script>
export default {
  props: ['isDisabled', 'emitter', 'ikey', 'getData', 'putData', 'value', 'onClick'],
  data() {
    return {
    //   value: 'hi',
      button: 'hi'
    }
  },
  methods: {
    click(e){
        console.log(e)
        console.log(this.$data)
        
    },
    // change(e){
    //   this.value = +e.target.value;
    //   this.update();
    // },
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value)
      }
      this.emitter.trigger('process');
    }
  },
  mounted() { 
    //   console.log(((this.ikey)))
    //   console.log((this.getData(this.ikey)))
    // this.value = this.getData(this.ikey);
  }
}
</script>
