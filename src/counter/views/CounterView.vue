<script setup lang="ts">
import { ref } from 'vue'


const counter = ref(44)
const increment = () => {
    counter.value++
}

// export default defineComponent({
//     setup() {

//         const counter = ref(44)
//         const increment = () => {
//             counter.value++
//         }

//         return {
//             counter,
//             increment
//         }
//     }
// })

</script>

<template>
    <div>
        <h1>Counter View: {{ counter }}</h1>
        <button @click="increment">+1</button>
    </div>
</template>