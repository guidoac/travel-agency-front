<template>
    <aside class="sidebar">
        <TheLogo />

        <div class="sidebar-items">
            <div
                class="sidebar-item"
                v-for="(item, index) in sideBarItems"
                :key="`sidebar-item-${index}`"
            >
                <BaseIcon class="sidebar-icon" :icon="item.icon" size="xl" />
                <span>
                    {{ item.label }}
                </span>
            </div>
        </div>

        <div>Sair</div>
    </aside>
</template>

<script setup>
import TheLogo from '@/components/TheLogo';
import BaseIcon from '@/components/BaseIcon';

const sideBarItems = [
    {
        label: 'Dashboard',
        icon: 'dashboard'
    },
    {
        label: 'Tours',
        icon: 'compass'
    },
    {
        label: 'Countries',
        icon: 'globe'
    }
];
</script>

<style lang="scss" scoped>
@import '@/assets/scss/sidebar.scss';
</style>
