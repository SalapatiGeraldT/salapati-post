<script setup>
import { RouterLink } from "vue-router";
import usePosts from '../repositories/post';
import { onMounted } from "vue";

const { posts, getPosts, destroyPost  } = usePosts();
 
onMounted(() => getPosts());
</script>


<template>
    <div class="mt-12" >

        <div class=" flex justify-end my-4 ">
            <RouterLink class="py-2 px-4 rounded text-white bg-green-900 hover:bg-green-700" 
            :to="{name: 'Create'}" >Add Employee</RouterLink>
        </div>
        <!-- CreateEmployee -->


        <div v-for="post in posts" :key="post.id"
        
        class=" p-4 "
        >
                            <div>
                                <span class=" font-bold"> Title: </span> {{ post.title }}
                            </div>
                            <div>
                                <span class=" font-bold"> Content: </span> {{ post.content }}
                            </div>

                            <div class=" border flex space-x-3">
                                <RouterLink :to="{name: 'Edit', params:{ id: post.id}}"
                            class=" bg-blue-900 text-white rounded hover:bg-blue-700 py-1 px-3 "
                            >
                            Edit 
                            </RouterLink>

                            <button
                            @click="destroyPost(post.id)"
                            class=" bg-red-900 text-white rounded hover:bg-red-700 px-3 py-1 "
                            >
                            Delete
                            </button>
                            </div>
        </div>
      
    </div>
</template>



<style></style>