<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import BaseLayout from "@/components/BaseLayout/Layout.vue";
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const showDebit = computed(() => route.params.tab == "debit");
const showCredit = computed(() => route.params.tab == "credit");
const showMultiple = computed(() => route.params.tab.length < 1);

const router = useRouter();
const onDebititClick = () => {
	if(showMultiple.value)
		router.push("/app/finance/debit");
	else router.push("/app/finance/");
};
const onCreditClick = () => {
	if(showMultiple.value)
		router.push("/app/finance/credit");
	else router.push("/app/finance/");
};
</script>
<template>
	<BaseLayout>
		<div class="container mb-12">
			<h3 class="page-heading">Laporan Keuangan</h3>
		</div>
		<div class="md:flex">
			<Transition name="switch">
				<div v-if="showDebit || showMultiple" class="switch-container bg-gray-100">
					<div class="p-8">
						<div class="flex">
							<button @click="onDebititClick" class="tab-item lg:ml-auto">Debit</button>
						</div>
						<div></div>
					</div>
				</div>
			</Transition>
			<Transition name="switch">
				<div v-if="showCredit || showMultiple" class="switch-container bg-gray-200">
					<div class="p-8">
						<div class="flex">
							<button @click="onCreditClick" class="tab-item">Kredit</button>
						</div>
						<div></div>
					</div>
				</div>
			</Transition>
		</div>
	</BaseLayout>
</template>
<style scoped>
	
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

.switch-container {
	@apply grow overflow-hidden;
}

.switch-container > div {
	@apply min-h-[50vh] md:min-h-[70vh];
}

.switch-enter-active, .switch-leave-active {
	transition: max-width 0.5s, opacity 0.5s;
}

.switch-enter-from, .switch-leave-to {
	@apply max-w-0 opacity-0;
}

.switch-enter-to, .switch-leave-from {
	@apply max-w-full;
}

</style>