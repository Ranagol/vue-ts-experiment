import { defineStore } from 'pinia';
import type { User } from "../types/interfaces";//Notice the import type!!!
import userServices from "../services/UserService";
import { h } from 'vue'
import { ElNotification } from 'element-plus'

export const useUserStore = defineStore({
    id: 'user',

    //This is the Pinia state
    state: () => ({
        users: [] as User[],
        user: {} as User
    }),

    //Actions are here. They can change the state. This is input.
    actions: {
        async getUsers() {
            try {
                this.users = await userServices.getUsers();
            } catch (error) {
                console.log("The error is:", error);
                alert("Error while fetching users.");
                ElNotification({
                    title: 'We have some Axios problem',
                    message: h('i', { style: 'color: teal' }, 'Error while fetching users'),
                })
            }
        }
    },
    
    /**
     * Getters are here. They are like computed in Vue 2. This is the store output.
     * Getters must receive the state as an argument. 
     * Getters must return something. 
     * Every getter is an object property, that stores an arrow () => {}, that return something.
     */
    getters: {
        
    }
});
