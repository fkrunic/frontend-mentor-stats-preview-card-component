<script setup lang="ts">
defineProps<{ header: string, category: string }>()
</script>

<template>
    <div class="flex flex-col items-center gap-1">
        <p class="text-2xl text-white font-bold">{{ header }}</p>
        <p class="text-xs text-white/50 tracking-widest">{{ category }}</p>
    </div>    
</template>

<style scoped>
* {
    box-sizing: border-box;
}
</style>