<template>
    <FontAwesomeIcon :icon="`fa-${type} fa-${icon}`" />
</template>

<script setup>
import { defineProps } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
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
    }
});

library.add(faArrowRightLong, faFacebookF, faInstagram, faTwitter);
</script>

<style lang="scss" scoped></style>
