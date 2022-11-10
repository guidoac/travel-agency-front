<template>
    <FontAwesomeIcon
        :icon="`fa-${type} fa-${icon}`"
        :size="size"
        class="text-admin-primary"
    />
</template>

<script setup>
import { defineProps } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowRightLong,
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash,
    faDashboard,
    faCompass,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

defineProps({
    icon: {
        type: String,
        required: true
    },

    type: {
        type: String,
        default: 'solid',
        required: false
    },

    size: {
        type: String,
        default: 'md',
        required: false
    }
});

library.add(
    faArrowRightLong,
    faFacebookF,
    faInstagram,
    faTwitter,
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash,
    faDashboard,
    faCompass,
    faGlobe
);
</script>

<style lang="scss" scoped></style>
