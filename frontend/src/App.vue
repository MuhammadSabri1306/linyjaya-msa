<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import BaseLayout from "@/components/BaseLayout/Layout.vue";

const route = useRoute();
const useBaseLayout = computed(() => ["home", "login", "register", "e404"].indexOf(route.name) < 0);

const userStore = useUserStore();
userStore.checkFromSession();
</script>
<template>
    <BaseLayout v-if="useBaseLayout">
        <RouterView />
    </BaseLayout>
    <RouterView v-else />
</template>