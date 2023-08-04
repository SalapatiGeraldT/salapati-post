<script setup>
import Title from "../components/Title.vue";
import CustomForm from "../components/CustomForm.vue";
import CustomInput from "../components/CustomInput.vue";
import { reactive, defineEmits } from "vue";
import CustomLabel from "../components/CustomLabel.vue";
import CustomButton from "../components/CustomButton.vue";
import useUsers from '../repositories/user';
import { RouterLink } from "vue-router";

const { storeUser, errors } = useUsers();


const form = reactive({
    email: "",
    password: "",
    user_name: "",
  
   
});

// const validateInput = () => {
//     todoState.invalid = false;
//     if (todoState.todo === "") {
//         todoState.invalid = true;

//         todoState.errMsg = "Input required";
//     } else {
//     }
// };
</script>

<template>
    <main>
        <div
            class=" m-[min(6vw,7rem)] flex items-center flex-col justify-center"
        >
            <Title>
                <template #title> Salapati Post </template>
                <template #desc> Registration </template>
            </Title>

            <CustomForm>
                <form @submit.prevent="storeUser(form)">
                    <div>
                        <CustomLabel for="user_name"> Username </CustomLabel>
                        <CustomInput
                            class="w-full"
                            
                            name="user_name"
                            placeholder="Enter username"
                            type="text"
                           @input-value="(input) => { form.user_name = input }"
                        />
                        <div class=" error-effect" v-if="errors.user_name">
                          <span class=" text-sm text-red-400">{{ errors.user_name[0] }}</span>
                      </div>
                    </div>
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

                    <div>
                        <CustomLabel for="password_confirmation">Confirm Password </CustomLabel>
                        <CustomInput
                            class="w-full"
                            
                            name="password_confirmation"
                            placeholder="Enter password confirmation"
                            type="password"
                           @input-value="(input) => { form.password_confirmation = input }"
                        />
                        <div class=" error-effect" v-if="errors.password_confirmation">
                          <span class=" text-sm text-red-400">{{ errors.password_confirmation[0] }}</span>
                      </div>
                    </div>
                    <div class=" text-sm bottomReminder_info p-4 my-4">
                        <ul>
                            <li>
                                Password must have a minimum length of 8 Characters.
                            </li>
                            <li>
                                Must contain at least one Number , uppercase and lowercase Letter.

                            </li>
                            <li>
                                The longer your password the higher the security.

                            </li>
                        </ul>
                    </div>

                  

              
                    <br>
                    <CustomButton
                    type="submit"
                    >
                      Register
                    </CustomButton>
                </form>
            </CustomForm>

            <span class="my-3 mx-auto">Already have an account?
                <RouterLink
                            class=" text-blue-700"
                            :to="{ name: 'Login' }"
                            > Log in
                        </RouterLink>
             </span>
        </div>
    </main>
</template>
