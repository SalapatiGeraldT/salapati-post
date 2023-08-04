<script setup>
import { reactive, defineEmits } from "vue";




// const props = defineProps({
//     value:{
//         type: String,
//         required: true,
    
//         // default(){
//         //     return
//         // }
//     },
//     index:{
//         type: Number,
//         required: true,
//     }

// })


// const todoState = reactive({

// });


const emit = defineEmits(["input-value"]);


</script>

<template>

 
  <input

    class="mb-1 p-2 outline-none rounded-sm hover:bg-green-200 focus:ring-2 border-green-800 border focus:ring-green-900"

    @input="$emit('input-value', $event.target.value, index)"
    v-bind="$attrs"
  />

</template>

<style lang="scss" scoped></style>
