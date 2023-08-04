<script setup>
import Title from "../components/Title.vue";
import CustomForm from "../components/CustomForm.vue";
import CustomInput from "../components/CustomInput.vue";
import { reactive, defineEmits } from "vue";
import CustomLabel from "../components/CustomLabel.vue";
import CustomButton from "../components/CustomButton.vue";
import useUsers from '../repositories/user';
import { RouterLink } from "vue-router";

const { loginUser, errors, message } = useUsers();


const form = reactive({
    email: "",
    password: "",
 
   
});


</script>

<template>
    <main>
        <div
            class=" m-[min(6vw,7rem)] flex items-center flex-col justify-center"
        >
            <Title>
                <template #title> Salapati Post </template>
                <template #desc> Login </template>
            </Title>

            <CustomForm>
                <form @submit.prevent="loginUser(form)">
          
                    <div>
                        <CustomLabel for="email"> Email </CustomLabel>
                        <CustomInput
                            class="w-full"
                            
                            name="email"
                            placeholder="Enter email"
                            type="text"
                           @input-value="(input) => { form.email = input }"
                        />
                        <div class=" error-effect" v-if="errors.email">
                          <span class=" text-sm text-red-400">{{ errors.email[0] }}</span>
                      </div>
                    </div>
                    <div>
                        <CustomLabel for="password"> Password </CustomLabel>
                        <CustomInput
                            class="w-full"
                            
                            name="password"
                            placeholder="Enter password"
                            type="password"
                           @input-value="(input) => { form.password = input }"
                        />
                        <div class=" error-effect" v-if="errors.password">
                          <span class=" text-sm text-red-400">{{ errors.password[0] }}</span>
                      </div>
                    </div>

              
                

                  

              
                    <br>
                    <CustomButton
                    type="submit"
                    >
                      Register
                    </CustomButton>

                    <div class=" error-effect" v-if="message">
                          <span class=" text-sm text-red-400">{{ message }}</span>
                      </div>
                </form>
            </CustomForm>
          

             <span class="my-3 mx-auto">Not registered yet?

<RouterLink
                            class=" text-blue-700"
                            :to="{ name: 'Register' }"
                            >  Create an Account
                        </RouterLink>
</span>
        </div>
    </main>
</template>
