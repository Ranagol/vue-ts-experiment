<template>
    <h1>Users</h1>

    <el-button type="primary">Test</el-button>

    {{ data.users }}

</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, ref, onUpdated, nextTick } from "vue";
import userServices from "../../services/UserService";
import type { User } from "../../types/interfaces";//Notice the import type!!!

let data = reactive({
    users: [] as Array<User>,
});

onMounted(async () => {
    console.log("onMounted.");
    //We use try/catch in Vue component, not in service. Because we want to handle the error here.
    try {
        const users = await userServices.getUsers();
        console.log("users:", users);
        data.users = users;
    } catch (error) {
        console.log("error:", error);
    }
});
</script>

<style scoped></style>
