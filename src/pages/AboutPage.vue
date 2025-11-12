<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
</script>

<template>
  <pre>{{ route }}</pre>
</template>

<style scoped>

</style>