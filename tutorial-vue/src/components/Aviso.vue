<script setup>
import { inject } from 'vue';

const aviso = inject("aviso");
</script>

<template>
  <div class="aviso">{{ aviso }}</div>

</template>

<style scoped>
.aviso {
  font-size: 0.575rem;
  text-align: center;
}
</style>