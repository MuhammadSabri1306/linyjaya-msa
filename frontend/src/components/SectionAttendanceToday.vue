<script setup>
import { computed } from "vue";
import { useAttendanceStore } from "@/stores/attendance";
import { PlusIcon } from "@heroicons/vue/24/solid";

const attendanceStore = useAttendanceStore();
const data = computed(() => attendanceStore.today);
const onNewAttendance = () => attendanceStore.setFormNewVisibility(true);
</script>
<template>
	<div class="bg-gray-200 md:px-8 py-12">
		<div class="container px-12">
			<div class="mb-8 lg:mb-4 flex items-center">
				<h6 class="font-bold lg:font-semibold text-xl font-body text-gray-900 md:text-black lg:px-4 drop-shadow-[0_0_2px_#fff]">Absensi Hari Ini</h6>
				<button @click="onNewAttendance" class="hidden md:inline bg-blue-800 enabled:hover:bg-blue-700 border border-blue-800 text-white shadow px-4 py-2 rounded ml-auto" type="button">Catat Absen</button>
				<button type="button" class="md:hidden fixed bottom-24 right-8 shadow-custom rounded-full text-white p-3 bg-blue-900 hover:bg-blue-800" @click="onNewAttendance">
					<PlusIcon class="w-8 h-8" />
				</button>
			</div>
			<div class="hidden md:block table-att-today">
				<table class="border-collapse table-fixed w-full">
					<thead>
						<tr><th>Kategori</th>
							<th>Hari</th>
							<th>Tanggal</th>
							<th>Jam</th>
							<th>Status</th>
							<th>Keterangan</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in data">
							<td class="capitalize">{{ item.category.title }}</td>
							<td>{{ item.day }}</td>
							<td>{{ item.date }}</td>
							<td>{{ item.time }}</td>
							<td>{{ item.workStatus }}</td>
							<td>{{ item.desc }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="flex md:hidden flex-col gap-8">
				<div v-for="item in data" class="card-att-today">
					<h6 class="card-att-today-header capitalize">{{ item.category.title }}</h6>
					<div class="card-att-today-body">
						<p class="mb-2">Hari : <span class="font-semibold">{{ item.day }}</span></p>
						<p class="mb-2">Tanggal : <span class="font-semibold">{{ item.date }}</span></p>
						<p>Jam : <span class="font-semibold">{{ item.time }}</span></p>
						<p class="mb-2">Status : <span class="font-semibold">{{ item.workStatus }}</span></p>
						<p class="mb-2">Keterangan : <span class="font-semibold">{{ item.desc }}</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>

.table-att-today,
.card-att-today {
	@apply rounded-2xl lg:rounded-lg overflow-hidden shadow text-lg lg:text-base;
}

.card-att-today {
	@apply flex flex-col items-stretch;
}

.table-att-today th,
.card-att-today-header {
	@apply bg-gray-100 px-4 lg:px-8 py-4 font-body;
}

.table-att-today th {
	@apply text-left;
}

.card-att-today-header {
	@apply text-center;
}

.table-att-today th,
.table-att-today td:first-child,
.card-att-today-header {
	@apply font-bold text-gray-900
}

.table-att-today td,
.card-att-today-body {
	@apply bg-white px-6 lg:px-8 py-6 lg:py-4 text-left font-medium text-gray-700;
}

.table-att-today th,
.table-att-today tr:not(:last-child) td,
.card-att-today-header {
	@apply border-b;
}

.shadow-custom {
	@apply shadow-[inset_5px_5px_10px_rgba(255,255,255,0.2),3px_3px_5px_rgba(0,0,0,0.4)];
}

</style>