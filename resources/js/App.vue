<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { computed, ref } from "vue";

const router = useRouter();
const token = ref(localStorage.getItem("token"));
const userName = ref(localStorage.getItem("user_name"));

const hasToken = computed(() => {
    return token.value !== null;
});

const logout = async () => {
    localStorage.removeItem("token");
    await router.push({ name: "Login" });
    token.value = null;
    userName.value = null;
};
</script>

<template>
    <div class="flex justify-between p-4">
        <div>Miniblog</div>

        <nav>
            <ul class="flex space-x-4 items-center">
                <li>
                    <div v-if="hasToken" :value="userName">
                        Hi {{ userName }}
                    </div>
                </li>
                <li>
                    <RouterLink
                        v-if="hasToken"
                        class="text-black hover:text-indigo-400"
                        :to="{ name: 'Login' }"
                    >Home
                    </RouterLink>
                </li>
                <li>
                    <div
                        v-if="hasToken"
                        @click="logout"
                        class="text-black hover:text-indigo-400 cursor-pointer"
                    >
                        Logout
                    </div>
                </li>
            </ul>
        </nav>
    </div>
    <div>
        <RouterView />
    </div>
</template>

<style scoped></style>
