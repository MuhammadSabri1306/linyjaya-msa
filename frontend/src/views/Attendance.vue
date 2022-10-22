<script setup>
import SectionAttendanceCards from "@/components/SectionAttendanceCards.vue";
import SectionAttendanceToday from "@/components/SectionAttendanceToday.vue";
import FormAttendanceInput from "@/components/FormAttendanceInput.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
</script>
<template>
	<div class="container mb-12">
		<h3 class="page-heading border-b pb-2">Absensi Kehadiran</h3>
	</div>
	<SectionAttendanceCards class="mb-12" />
	<SectionAttendanceToday @new="showFormAttNew = true" />
	<FormAttendanceInput />
</template>