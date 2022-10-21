<script setup>
import BaseLayoutTabs from "@/components/BaseLayoutTabs.vue";

const tabItems = [
	{ target: "/app/report", title: "Summary" },
	{ target: "/app/report/daily", title: "Laporan Harian" },
	{ target: "/app/report/trip", title: "Laporan Kunjungan" },
	{ target: "/app/report/permit", title: "Pengajuan Cuti" }
];
</script>
<template>
	<div class="container">
		<h3 class="page-heading mb-8">Pengajuan</h3>
		<BaseLayoutTabs :items="tabItems" />
	</div>
</template>