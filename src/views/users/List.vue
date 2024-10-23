<template>
    <h1>Users</h1>

    <!-- TABLE -->
    <el-table :data="userStore.users" stripe border highlight-current-row class="mt-4" style="width: 100%;"
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
import type { User } from "../../types/interfaces";//Notice the import type!!!
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import { useUserStore } from "@/stores/UserStore";

//Get the users from the store.
const userStore = useUserStore();

onMounted(async () => {
    console.log("onMounted.");
    userStore.getUsers();
});

</script>

<style scoped></style>
