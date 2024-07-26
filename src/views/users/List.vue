<template>
  <h1>Users</h1>
</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, ref, onUpdated, nextTick } from "vue";
import UserServices from "../../services/UserService";

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

onMounted(() => {
  console.log("onMounted.");
  const users = UserServices.getUsers();
  console.log("users:", users);
});
</script>

<style scoped></style>
