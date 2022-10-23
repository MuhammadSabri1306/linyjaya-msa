<script setup>
import SectionAttendanceCards from "@/components/SectionAttendanceCards.vue";
import SectionAttendanceToday from "@/components/SectionAttendanceToday.vue";
import FormAttendanceInput from "@/components/FormAttendanceInput.vue";
import BackgroundAnimated from "@/components/BackgroundAnimated.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
</script>
<template>
	<div class="container mb-12">
		<h3 class="page-heading pb-2">Absensi Kehadiran</h3>
	</div>
	<SectionAttendanceToday @new="showFormAttNew = true" />
	<SectionAttendanceCards class="py-12 bg-gray-100 bg-gradient-custom" />
	<FormAttendanceInput />
</template>