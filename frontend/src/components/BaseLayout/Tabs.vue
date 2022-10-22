<script setup>
import { computed } from "vue";

const props = defineProps({
	items: { type: Array, default: [] }
});

const tabAttrs = computed(() => props.items);
</script>
<template>
	<div v-if="tabAttrs.length > 0" class="flex gap-4">
		<RouterLink v-for="item in tabAttrs" :to="item.target" class="tab-item">{{ item.title }}</RouterLink>
	</div>
</template>
<style scoped>
	
/*.tab-item {
	@apply py-2 px-4 rounded text-sm font-medium border transition-colors bg-transparent border-gray-400 text-gray-500; 
}

.tab-item:not(.router-link-active) {
	@apply hover:border-blue-500 hover:text-blue-700; 
}

.tab-item.router-link-active {
	@apply bg-blue-600 border-blue-600 text-white cursor-default; 
}*/

.tab-item {
	@apply text-sm text-slate-700 hover:text-blue-700 font-bold mt-2 py-2 px-4 relative;
}

.tab-item:focus:after,
.tab-item:hover:after, {
	@apply w-full left-0;
}

.tab-item:after {
	@apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-700;
	content: "";
	pointer-events: none;
	transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	transition-duration: 400ms;
	transition-property: width, left;
}

.tab-item.router-link-active {
	@apply text-white bg-blue-600 rounded font-semibold;
}

.tab-item.router-link-active:after {
	@apply w-0;
}

</style>