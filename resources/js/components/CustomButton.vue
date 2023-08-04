<script setup>
// import { defineEmits } from "vue";
// const emit = defineEmits([
//     "create-todo"
// ]);

// const createTodo = () => {
//     emit('create-todo', todo.value);
// };
</script>
<template>
    <div  class=" flex flex-col">
        <button  
            class="bg-green-900
            hover:bg-green-200 hover:text-black text-white py-1 px-6 rounded-md
            
            "
            v-bind="$attrs" 
            >
            <slot></slot>
        </button>
    </div>
</template>

<style lang="scss" scoped></style>
