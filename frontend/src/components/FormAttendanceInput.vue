<script setup>
import { ref, computed } from "vue";
import { useAttendanceStore } from "@/stores/attendance";
import Modal from "@/components/Modal.vue";

const attendanceStore = useAttendanceStore();
const show = computed(() => attendanceStore.formNewVisibility);

const onCancel = () => attendanceStore.setFormNewVisibility(false);
const onSave = () => attendanceStore.setFormNewVisibility(false);
</script>
<template>
	<Modal :show="show" @close="onCancel">
		<template #header>
			<h6 class="text-xl font-semibold font-body text-gray-900">Absensi Hari Ini</h6>
		</template>
		<template #content>
			<div>your content...</div>
		</template>
		<template #footer>
			<div class="flex items-center justify-end gap-4">
				<button @click="onSave" class="bg-blue-800 hover:bg-blue-700 border border-blue-800 text-white text-sm font-medium rounded-2xl lg:rounded px-4 py-2">Simpan Absensi</button>
			</div>
		</template>
	</Modal>
</template>