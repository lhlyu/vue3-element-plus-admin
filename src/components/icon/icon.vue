<template>
    <el-icon v-if="name">
        <component :is="name"></component>
    </el-icon>
</template>

<script setup lang="ts">
const props = defineProps<{
    name?: string
}>()
</script>
