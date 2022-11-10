<template>
    <div class="max-w-screen-2xl h-screen flex items-stretch">
        <SideBar />
        <div class="page-content">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import SideBar from '@/components/SideBar';
</script>

<style lang="scss" scoped></style>
