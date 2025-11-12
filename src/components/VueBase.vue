<script>
export default {
  name: 'App',
  props: ['item'],
  emits: [],
  data() {
    return {
      title: 'data'
    }
  },
  computed: {
    getData() {
      return this.title;
      this.$route.params;
      this.$router.push('/daa')
    }
  },
  methods: {
    updateData() {
      this.title = 'fdsjkdfsjkl'
    }
  },
  watch: {

  },
  mounted() {
    this.updateData()
    this.$emit('')
  },
  unmounted() {
  }
}
</script>

<script setup>
import {computed, onMounted, onUnmounted, reactive, ref, watch, watchEffect} from "vue";

const data = ref('');

const obj = reactive({
  title: { data: '' },
  description: ''
})

const dataB = computed(() => `dasas: ${data.value}`)

/** watch - отслеживает изменения в слушателе, и вызывает функцию
 * deep - позволяет отслеживать изменения на глубине
 * immediate - вызывается не только при первом изменении, но и при монтировании компонента
 * once - вызывается один раз
 * */
watch(data, (value, oldValue) => console.log({ value, oldValue }), {
  once: true
})

watchEffect(() => {
  data.value += 'Даня огурец'

  console.log(data.value)
})

onMounted(() => {
  console.log('This component mounted')
})

onUnmounted(() => {

})
</script>

<template>
  <input type="text" v-model="data">
</template>