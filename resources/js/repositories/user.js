import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/user/";

export default function useUsers(){
    const errors = ref([]);
    const router = useRouter();
    const message = ref();

    const storeUser = async (data) => {
        errors.value = [];
        try {
            await axios.post("register", data);
            await router.push({name: "Login"});
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const loginUser = async (data) => {
        errors.value = []; 
        message.value = null; 
   
        try {
            
            await axios.post('login', data).then(res=>{
                if(res.data.success){
                    localStorage.setItem('token', res.data.data.token);
                    localStorage.setItem('user_name', res.data.data.name);
                    window.location.reload();
                    
                }else{
                    message.value = res.data.message;
                }
            });

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

 

    return {
        storeUser,
        loginUser,
      
        errors,
        message
    };
}