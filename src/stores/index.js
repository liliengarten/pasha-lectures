import {computed, onMounted, ref} from "vue";


const globalCount = ref(0)

export const useCounterStore = () => {
    const localCount = ref(0)

    const doubleCount = computed(() => globalCount.value * 2)

    const increment = () => globalCount.value++;

    onMounted(() => console.log(globalCount.value))

    return {
        localCount,
        globalCount,
        doubleCount,
        increment
    }
}
