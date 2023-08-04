<script setup>
import Title from "../components/Title.vue";
import CustomForm from "../components/CustomForm.vue";
import CustomInput from "../components/CustomInput.vue";
import { reactive, onMounted } from "vue";
import CustomLabel from "../components/CustomLabel.vue";
import CustomButton from "../components/CustomButton.vue";
import usePosts from "../repositories/post";
import { RouterLink } from "vue-router";

const { post, getPost, updatePost, errors } = usePosts();

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});

onMounted(() => getPost(props.id));
</script>

<template>
    <main>
        <div
            class="m-[min(6vw,7rem)] flex items-center flex-col justify-center"
        >
            <Title>
                <template #title> Salapati Post </template>
                <template #desc> Edit </template>
            </Title>

            <CustomForm>
                <form @submit.prevent="updatePost($route.params.id)">
                    <div>
                        <CustomLabel for="title"> Title </CustomLabel>

                        <input
                            class="w-full mb-1 p-2 outline-none rounded-sm hover:bg-green-200 focus:ring-2 border-green-800 border focus:ring-green-900"
                            v-model="post.title"
                            name="title"
                            placeholder="Enter title"
                            type="text"
                        />
                        <div class="error-effect" v-if="errors.title">
                            <span class="text-sm text-red-400">{{
                                errors.title[0]
                            }}</span>
                        </div>
                    </div>
                    <div>
                        <CustomLabel for="content"> Content </CustomLabel>
                        <input
                            class="w-full mb-1 p-2 outline-none rounded-sm hover:bg-green-200 focus:ring-2 border-green-800 border focus:ring-green-900"
                            v-model="post.content"
                            name="content"
                            placeholder="Enter content"
                            type="text"
                        />
                        <div class="error-effect" v-if="errors.content">
                            <span class="text-sm text-red-400">{{
                                errors.content[0]
                            }}</span>
                        </div>
                    </div>

                    <br />
                    <CustomButton type="submit"> Update </CustomButton>
                </form>
            </CustomForm>
        </div>
    </main>
</template>
