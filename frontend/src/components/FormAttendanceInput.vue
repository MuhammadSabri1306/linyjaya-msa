<script setup>
import { ref, reactive, computed } from "vue";
import { useAttendanceStore } from "@/stores/attendance";
import Modal from "@/components/Modal.vue";

const attendanceStore = useAttendanceStore();
const show = computed(() => attendanceStore.formNewVisibility);
const presentCategories = computed(() => attendanceStore.availablePresent);

const data = reactive({
	workStatus: "",
	category: "",
	desc: ""
});

const formElm = ref(null);

const onCancel = () => attendanceStore.setFormNewVisibility(false);
const onSave = () => {
	/*if(data.workStatus.length < 1 || data.category.length < 1) {
		formElm.value.submit();
		return;
	}*/

	attendanceStore.addToday(data.workStatus, data.category, data.desc);
	attendanceStore.setFormNewVisibility(false);
};
</script>
<template>
	<Modal class="hidden md:block" :show="show" @close="onCancel" widthClass="w-[300px]">
		<template #header>
			<h6 class="text-xl font-semibold font-body text-gray-900">Absensi Hari Ini</h6>
		</template>
		<template #content>
			<form ref="formElm" method="post" class="grid grid-cols-1 gap-4 mb-4">
				<div class="form-group">
					<label for="selectCategory">Kategori*</label>
					<select v-model="data.category" id="selectCategory" required>
						<option disabled value="">Pilih Kategori</option>
						<option v-for="item in presentCategories" :value="item.id" :disabled="item.isDone">{{ item.title }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="selectWorkStatus">Status*</label>
					<select v-model="data.workStatus" id="selectWorkStatus" required>
						<option disabled value="">Pilih Status</option>
						<option>Work At Office</option>
						<option>Work From Home</option>
						<option>Izin</option>
						<option>Sakit</option>
					</select>
				</div>
				<div class="form-group">
					<label for="textareaDesc">Keterangan</label>
					<textarea v-model="data.desc" id="textareaDesc"></textarea>
				</div>
			</form>
		</template>
		<template #footer>
			<div class="flex items-center justify-end gap-4">
				<button @click="onSave" class="bg-blue-800 hover:bg-blue-700 border border-blue-800 text-white text-sm font-medium rounded-2xl lg:rounded px-4 py-2">Simpan Absensi</button>
			</div>
		</template>
	</Modal>
</template>
<style scoped>
	
.form-group label {
	@apply text-sm font-semibold text-black/60 block mb-2;
}

.form-group input, .form-group textarea, .form-group select {
	@apply block w-full px-4 py-2 text-sm bg-transparent rounded border border-gray-200 focus:border-gray-400  text-black/70 focus:text-black/90;
}

.form-group select, .form-group option {
	@apply capitalize;
}

.form-group option {
	@apply text-base leading-loose disabled:text-black/50;
}

</style>