<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseLayout from "@/components/BaseLayout.vue";

const route = useRoute();
const useBaseLayout = computed(() => ["home", "login", "register", "e404"].indexOf(route.name) < 0);
</script>
<template>
    <BaseLayout v-if="useBaseLayout">
        <RouterView />
    </BaseLayout>
    <RouterView v-else />
</template>