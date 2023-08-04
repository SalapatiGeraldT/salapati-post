import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function usePosts(){
    const posts = ref([]);
    const post = ref([]);
    const errors = ref([]);
    const router = useRouter();



    const getPosts = async () => {
   
        const response = await axios.get("posts");
        posts.value = response.data.data;

    };

    const getPost = async (id) => {
        const response = await axios.get("posts/"+ id);
        post.value = response.data.data;
    };

    const storePost = async (data) => {
        const accessToken = localStorage.getItem("token");
        try {
            await axios.post("posts", data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
    
            await router.push({ name: "Dashboard" });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Handle validation errors
                errors.value = error.response.data.errors;
            } else {
                // Handle other errors
                console.error(error);
            }
        }
    };
    


    const updatePost = async (id) => {

        const accessToken = localStorage.getItem("token");
        try {
            // await axios.put("posts/" + id, post.value);
            await axios.put("posts/" + id, post.value, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            await router.push({name: "Dashboard"});
        }catch (error) {
                if (error.response && error.response.status === 422) {
                    // Handle validation errors
                    errors.value = error.response.data.errors;
                } else {
                    // Handle other errors
                    console.error(error);
                }
        }
    };
    
    const destroyPost = async (id) => {
        if(!window.confirm("Are You Sure?")){
            return;
        }

        const accessToken = localStorage.getItem("token");
        await axios.delete("posts/"+ id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        await getPosts();
    };

    return {
        post,
        posts,
        getPost,
        getPosts,
        storePost,
        updatePost,
        destroyPost,
        errors
    };
}