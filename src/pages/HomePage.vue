<script setup>
import {useRoute, useRouter} from "vue-router";
import {useCounterStore} from "@/stores/index.js";

const { globalCount, doubleCount, increment } = useCounterStore()
</script>

<template>
  <div>
    Первый: {{ globalCount }}
    <button @click="increment">fsdfsdsdf</button>
  </div>
  <div>
    Второй: {{ doubleCount }}
  </div>
</template>

<style scoped>

</style>