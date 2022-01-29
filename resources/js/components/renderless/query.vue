<script>
 import Blueprint from '../../stores/blueprint';

 export default {
   props: {
     blueprint: {
       type: Array,
       required: false,
     },
     conditions: {
       type: Array,
       required: false,
     },
   },
   provide() {
     const { blueprintStore } = this;
     return {
       blueprint: blueprintStore,
       builderModeActive: false,
     }
   },
   data() {
     return {
       blueprintStore: new Blueprint(
           this.blueprint,
           this.conditions,
           (updatedBlueprint) => {
             this.$emit('change', updatedBlueprint)
           },
       ),
     };
   },
   render() {
     const { blueprintStore: blueprint } = this;
     if (this.$scopedSlots?.default) {
       return this.$scopedSlots.default({ blueprint });
     }
     return null;
   },
 };
</script>
