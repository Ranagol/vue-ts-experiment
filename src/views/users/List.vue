<template>
    <h1>Users</h1>
</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, ref, onUpdated, nextTick } from "vue";
import userServices from "../../services/UserService";

let props = defineProps({});

let data = reactive({});

const myMethod = () => {
    console.log("myMethod");
};

const emit = defineEmits(["hide"]);

let computedExample = computed(() => {
    return "random text by computed";
});

watch(
    () => data,
    (newValue, oldValue) => {
        console.log("count changed");
        console.log("oldValue:", oldValue);
        console.log("newValue:", newValue);
    },
    { deep: true }
);

onMounted(async () => {
    console.log("onMounted.");
    //We use try/catch in Vue component, not in service. Because we want to handle the error here.
    try {
        const users = await userServices.getUsers();
        console.log("users:", users);
    } catch (error) {
        console.log("error:", error);
    }
});
</script>

<style scoped></style>
