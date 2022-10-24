<script setup>
import BaseLayout from "@/components/BaseLayout/Layout.vue";
import SectionAttendanceCards from "@/components/SectionAttendanceCards.vue";
import SectionAttendanceToday from "@/components/SectionAttendanceToday.vue";
import FormAttendanceInput from "@/components/FormAttendanceInput.vue";
import BackgroundAnimated from "@/components/BackgroundAnimated.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
</script>
<template>
	<BaseLayout>
		<div class="container mb-12">
			<h3 class="page-heading">Absensi Kehadiran</h3>
		</div>
		<SectionAttendanceToday @new="showFormAttNew = true" />
		<SectionAttendanceCards class="py-12 bg-gray-100 bg-gradient-custom" />
		<FormAttendanceInput />
	</BaseLayout>
</template>