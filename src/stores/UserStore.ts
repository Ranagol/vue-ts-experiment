import { defineStore } from 'pinia';
import type { User } from "../types/interfaces";//Notice the import type!!!
import userService from "../services/UserService";
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
                this.users = await userService.getUsers();
            } catch (error) {
                console.log("The error is:", error);
                alert("Error while fetching users.");
                //Yes, Element Plus notification can work from store, from here.
                ElNotification({
                    title: 'We have some Axios problem',
                    message: h('i', { style: 'color: teal' }, 'Error while fetching users'),
                })
            }
        },

        async getUserById(id: number) {
            try {
                this.user = await userService.getUserById(id);
            } catch (error) {
                alert("Error while fetching user.");
                ElNotification({
                    title: 'We have some Axios problem',
                    message: h('i', { style: 'color: teal' }, 'Error while fetching user'),
                })
            }
        },

        async updateUser(user: User) {
            try {
                this.user = await userService.updateUser(user);
                console.log('This is the updated user object recevied from api:', this.user);
                alert(`New name is:, ${this.user.name}, new email is: ${this.user.email}`);
            } catch (error) {
                alert("Error while updating user.");
                ElNotification({
                    title: 'We have some Axios problem',
                    message: h('i', { style: 'color: teal' }, 'Error while updating user'),
                })
            }
        },

        async deleteUser(id: number) {
            try {
                // Deletes from db
                await userService.deleteUser(id);

                // Deletes from store
                this.users = this.users.filter(user => user.id !== id);

                alert("User deleted.");
            } catch (error) {
                alert("Error while deleting user.");
                ElNotification({
                    title: 'We have some Axios problem',
                    message: h('i', { style: 'color: teal' }, 'Error while deleting user'),
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
