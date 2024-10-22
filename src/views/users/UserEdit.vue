<template>
    <h1>User edit page</h1>

</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, ref, onUpdated, nextTick } from 'vue';
import _ from 'lodash';
import type { User } from "../../types/interfaces";//Notice the import type!!!

let data = reactive({
    user: {} as User,
});

const myMethod = () => {
    console.log('myMethod');
}



</script>

<style scoped></style>
