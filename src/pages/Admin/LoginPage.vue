<template>
    <div class="flex grow">
        <div class="bg-admin-primary-light flex-1 section">teste</div>
        <div class="bg-white flex-1 section">
            <div>
                <BaseInput
                    class="mb-4"
                    placeholder="Type your e-mail"
                    type="text"
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

                <BaseButton
                    class="w-full mt-6"
                    label="login"
                    @click="submitLogin"
                />

                <p class="text-center mt-2">
                    Need an account?
                    <router-link :to="{ name: 'admin.register' }">
                        Sign Up
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseInput from '@/components/Base/BaseInput';
import BaseButton from '@/components/Base/BaseButton';
import BaseIcon from '@/components/BaseIcon';

import { ref } from '@vue/reactivity';
import { useAuthStore } from '@/stores/auth';

let passwordViewed = ref(false);
let email = ref('');
let password = ref('');

const auth = useAuthStore();

async function submitLogin() {
    await auth.signIn(email.value, password.value);
}
</script>

<style lang="scss" scoped>
.section {
    @apply px-44 py-36;
}
</style>
