<template>
<!-- We edit only the name and the email. Our api, the https://jsonplaceholder.typicode.com/
 can't really do the editing function in the api, it will only send back a success response. But the
 user data in the db will not be changed. This is ok for learning and demonstration. So at the end
 of a successfull user update, we will get from the api the new, updated user object. -->
    <h1>User edit page</h1>
    {{ userStore.user }}

    <!-- Yes, we can directly connect a v-model to a Pinia state variable, like below. -->
    <el-input
        v-model="userStore.user.name"
        placeholder="Name"
        type="text"
        clearable
    ></el-input>

    <el-input
        v-model="userStore.user.email"
        placeholder="Email"
        type="text"
        clearable
    ></el-input>

    <el-button
        type="primary"
        @click="updateUser"
    >
        Update
    </el-button>

</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, ref, onUpdated, nextTick } from 'vue';
import _ from 'lodash';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from "@/stores/UserStore";

//Get the users from the store.
const userStore = useUserStore();

//The current pages route object, that contains the user id.
const route = useRoute();


onMounted(() => {
    // console.log("onMounted UserEdit.");
    // console.log(route.params.id);
    //the id is a string. So we must convert it to a number, with the Number().
    const userId = Number(route.params.id);
    userStore.getUserById(userId);
});


const updateUser = () => {
    console.log("updateUser");
    //We change the values directly in Pinia user store. So we send this user from Pinia to the api.
    userStore.updateUser(userStore.user);
}


</script>

<style scoped></style>
