<script setup>
defineProps(['data'])
const emits = defineEmits(['get-jopa'])

const model = defineModel()

const handleGetJopa = () => {
  emits('get-jopa', 'Тиха тиха')
}
</script>

<template>
  <div>{{ data }}</div>
  <input type="text" v-model="model">
  <button @click="handleGetJopa">Получить жопу</button>
</template>

<style scoped>

</style>