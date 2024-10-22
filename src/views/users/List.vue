<template>
    <h1>Users</h1>

    <!-- TABLE -->
    <el-table :data="data.users" stripe border highlight-current-row class="mt-4" style="width: 100%;"
        empty-text="No result. Try with different search parameters.">
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="username" label="Username" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="address.city" label="Address" />
        <el-table-column prop="phone" label="Phone" />
        <el-table-column prop="website" label="Website" />
        <el-table-column prop="company.name" label="Company" />
    </el-table>

</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, ref, onUpdated, nextTick } from "vue";
import userServices from "../../services/UserService";
import type { User } from "../../types/interfaces";//Notice the import type!!!
import { h } from 'vue'
import { ElNotification } from 'element-plus'

let data = reactive({
    users: [] as Array<User>,//This is how we define an array of User types.
});


onMounted(async () => {
    console.log("onMounted.");
    //We use try/catch in Vue component, not in service. Because we want to handle the error here.
    try {
        const users = await userServices.getUsers();
        console.log("users:", users);
        data.users = users;
    } catch (error) {
        console.log("The error is:", error);
        // alert("Error while fetching users.");
        ElNotification({
            title: 'We have some Axios problem',
            message: h('i', { style: 'color: teal' }, 'Error while fetching users'),
        })
    }
});
</script>

<style scoped></style>
