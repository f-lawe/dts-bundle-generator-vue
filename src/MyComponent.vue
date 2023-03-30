<script lang="ts" setup>
defineProps<{
  prop?: string;
}>();
</script>

<template>
  <div>{{ prop }}</div>
</template>
