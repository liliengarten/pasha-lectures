<script setup>
import MyComponent from "@/components/MyComponent.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const data = ref('')
const router = useRouter()

const handleMyComponent = (data) => console.log(data)

const getData = () => {
  router.push({ name: 'posts', params: { id: 444 } })
}
</script>

<template>
  <div>
    <div>
      <MyComponent v-model="data" data="dfsdfsgds" @get-jopa="handleMyComponent" />
      {{ data }}
    </div>
    <header>
      <nav>
        <router-link to="/">Домой</router-link>
        <router-link to="/about">Абоут</router-link>
        <button @click="getData">Перейти на 444</button>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style scoped></style>
