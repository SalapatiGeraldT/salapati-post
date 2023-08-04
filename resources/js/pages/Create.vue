<script setup>
import Title from "../components/Title.vue";
import CustomForm from "../components/CustomForm.vue";
import CustomInput from "../components/CustomInput.vue";
import { reactive, defineEmits } from "vue";
import CustomLabel from "../components/CustomLabel.vue";
import CustomButton from "../components/CustomButton.vue";
import usePosts from '../repositories/post';
import { RouterLink } from "vue-router";

const { storePost, errors } = usePosts();




const form = reactive({
    title: "",
    content: "",
 
   
});


</script>

<template>
    <main>
        <div
            class=" m-[min(6vw,7rem)] flex items-center flex-col justify-center"
        >
            <Title>
                <template #title> Salapati Post </template>
                <template #desc> Create </template>
            </Title>

            <CustomForm>
                <form @submit.prevent="storePost(form)">
          
                    <div>
                        <CustomLabel for="title"> Title </CustomLabel>
                        <CustomInput
                            class="w-full"
                            
                            name="title"
                            placeholder="Enter title"
                            type="text"
                           @input-value="(input) => { form.title = input }"
                        />
                        <div class=" error-effect" v-if="errors.title">
                          <span class=" text-sm text-red-400">{{ errors.title[0] }}</span>
                      </div>
                    </div>
                    <div>
                        <CustomLabel for="content"> Content </CustomLabel>
                        <CustomInput
                            class="w-full"
                            
                            name="content"
                            placeholder="Enter content"
                            type="content"
                           @input-value="(input) => { form.content = input }"
                        />
                        <div class=" error-effect" v-if="errors.content">
                          <span class=" text-sm text-red-400">{{ errors.content[0] }}</span>
                      </div>
                    </div>

              
                

                  

              
                    <br>
                    <CustomButton
                    type="submit"
                    >
                      Register
                    </CustomButton>

                  
                </form>
            </CustomForm>
          

   
        </div>
    </main>
</template>
