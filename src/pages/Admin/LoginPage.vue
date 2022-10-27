<template>
    <div class="flex grow">
        <div class="bg-admin-primary-light flex-1 section">teste</div>
        <div class="bg-white flex-1 section">
            <form @submit="submitLogin">
                <BaseInput
                    placeholder="Type your e-mail"
                    type="email"
                    v-model="email"
                >
                    <template #label> Email </template>
                    <template #left-icon>
                        <BaseIcon icon="envelope" size="lg" />
                    </template>
                </BaseInput>

                <BaseInput
                    placeholder="Type your password"
                    :type="passwordViewed ? 'text' : 'password'"
                    v-model="password"
                >
                    <template #label> Password </template>
                    <template #left-icon>
                        <BaseIcon icon="lock" size="lg" />
                    </template>
                    <template #right-icon>
                        <BaseIcon
                            class="cursor-pointer"
                            size="lg"
                            :icon="passwordViewed ? 'eye-slash' : 'eye'"
                            @click="passwordViewed = !passwordViewed"
                        />
                    </template>
                </BaseInput>
            </form>
        </div>
    </div>
</template>

<script setup>
import BaseInput from '@/components/Base/BaseInput';
import BaseIcon from '@/components/BaseIcon';

import { ref } from '@vue/reactivity';

const email = ref('');
const passwordViewed = ref(false);

const submitLogin = async () => {};
</script>

<style lang="scss" scoped>
.section {
    @apply px-44 py-36;
}
</style>
