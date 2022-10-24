<script setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import BaseBottomNav from "@/components/BaseLayout/BottomNav.vue";

const route = useRoute();
const useBaseLayout = computed(() => ["home", "login", "register", "e404"].indexOf(route.name) < 0);

const userStore = useUserStore();
userStore.checkFromSession();
</script>
<template>
    <div><RouterView /></div>
    <BaseBottomNav v-if="useBaseLayout" />
</template>