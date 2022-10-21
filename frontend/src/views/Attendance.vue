<script setup>
import BaseLayoutTabs from "@/components/BaseLayoutTabs.vue";

const tabItems = [
	{ target: "/app/attendance", title: "Hari Ini" },
	{ target: "/app/attendance/all", title: "Semua" }
];
</script>
<template>
	<div class="container">
		<h3 class="page-heading mb-8">Absensi Kehadiran</h3>
		<BaseLayoutTabs :items="tabItems" />
	</div>
</template>