<script setup>
import BaseLayoutTabs from "@/components/BaseLayoutTabs.vue";

const tabItems = [
	{ target: "/app/finance/debit", title: "Debit" },
	{ target: "/app/finance/credit", title: "Kredit" }
];
</script>
<template>
	<div class="container">
		<h3 class="page-heading mb-8">Laporan Keuangan</h3>
		<BaseLayoutTabs :items="tabItems" />
	</div>
</template>