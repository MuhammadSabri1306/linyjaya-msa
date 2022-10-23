<script setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import BaseLayout from "@/components/BaseLayout/Layout.vue";

const route = useRoute();
const useBaseLayout = computed(() => ["home", "login", "register", "e404"].indexOf(route.name) < 0);

const userStore = useUserStore();
userStore.checkFromSession();


const isDashboardPage = computed(() => route.name == "dashboard" || route.name == "contact");

if(isDashboardPage.value)
    document.body.classList.add("bg-blue-900");
watch(() => isDashboardPage.value, val => {
    if(val) document.body.classList.add("bg-blue-900");
    else document.body.classList.remove("bg-blue-900");
});
</script>
<template>
    <BaseLayout v-if="useBaseLayout">
        <RouterView />
    </BaseLayout>
    <RouterView v-else />
</template>