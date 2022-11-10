<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="text-3xl">Dashboard</h1>

            <BaseInput
                placeholder="Search Tour"
                v-model="search"
                size="small"
                class="w-2/5"
            >
                <template #right-icon>
                    <BaseIcon icon="search" size="lg" />
                </template>
            </BaseInput>

            <div>profile</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

import BaseInput from '@/components/Base/BaseInput';
import BaseIcon from '@/components/BaseIcon';

let search = ref('');
</script>

<style lang="scss" scoped></style>
