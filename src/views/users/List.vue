<template>
    <h1>Users</h1>

    <!-- TABLE -->
    <el-table 
        :data="userStore.users" 
        stripe 
        border 
        highlight-current-row class="mt-4" 
        style="width: 100%;"
        empty-text="No result. Try with different search parameters."
    >
        <!-- Displaying dinamically the id od the user with the help of the v-slot -->
        <el-table-column prop="id" label="ID" width="100">
            <template v-slot="scope">

                <a
                    :href="`users/${scope.row.id}`"
                >
                    {{ scope.row.id }}
                </a>
                
            </template>

        </el-table-column>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="phone" label="Phone" />
        <el-table-column prop="company.name" label="Company" />

        <!-- How to insert a delete button into a table with scope -->
        <el-table-column>
            <template v-slot="scope">
                <el-button
                    type="primary"
                    size="mini"
                    @click="deleteUser(scope.row.id)"
                >
                    Delete
                </el-button>
            </template>
        </el-table-column>

    </el-table>

</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, ref, onUpdated, nextTick } from "vue";
import { useUserStore } from "@/stores/UserStore";

//Get the users from the store.
const userStore = useUserStore();

onMounted(async () => {
    // console.log("onMounted.");
    userStore.getUsers();
});

const deleteUser = (id: number) => {
    userStore.deleteUser(id);
};

</script>

<style scoped></style>
