<script setup>
import BaseLayout from "@/components/BaseLayout/Layout.vue";
import BaseLayoutTabs from "@/components/BaseLayout/Tabs.vue";

const tabItems = [
	{ target: "/app/report", title: "Laporan Harian" },
	{ target: "/app/report/trip", title: "Laporan Kunjungan" },
	{ target: "/app/report/permit", title: "Pengajuan Cuti" }
];
</script>
<template>
	<BaseLayout>
		<div class="container mb-8">
			<h3 class="page-heading mb-8">Laporan Harian</h3>
			<BaseLayoutTabs :items="tabItems" />
		</div>
		<div class="container">
			<p class="text-black/70 font-semibold px-8">Belum ada data.</p>
		</div>
	</BaseLayout>
</template>