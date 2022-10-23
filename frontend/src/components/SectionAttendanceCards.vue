<script setup>
import { computed } from "vue";
import { useAttendanceStore } from "@/stores/attendance";

const attendanceStore = useAttendanceStore();
const data = computed(() => attendanceStore.lastMonthItem);
</script>
<template>
	<div>
		<div class="container px-12">
			<h6 class="font-bold lg:font-semibold text-xl font-body text-gray-900 md:text-black lg:px-4">Absensi Bulan Ini</h6>
			<div class="hidden lg:flex flex-wrap gap-6 py-8">
				<div class="card card-attendance bg-gradient-to-br from-emerald-600 to-yellow-500 text-white">
					<p class="text-white text-sm font-semibold">Kehadiran</p>
					<p class="text-white text-6xl font-bold">{{ data.present }}</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-fuchsia-700 to-red-600 text-white">
					<p class="text-white text-sm font-semibold">Tidak Hadir</p>
					<p class="text-white text-6xl font-bold">{{ data.absent }}</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-fuchsia-700 to-indigo-700 text-white">
					<p class="text-white text-sm font-semibold">Sakit</p>
					<p class="text-white text-6xl font-bold">{{ data.sick }}</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-cyan-700 to-green-600 text-white">
					<p class="text-white text-sm font-semibold">Izin</p>
					<p class="text-white text-6xl font-bold">{{ data.permit }}</p>
				</div>
			</div>
		</div>
		<div class="lg:hidden w-screen overflow-x-hidden">
			<div class="grid grid-cols-[repeat(4,12rem)] px-4 md:px-8 py-8 gap-4 overflow-x-auto">
				<div class="card card-attendance bg-gradient-to-br from-emerald-600 to-yellow-500 text-white">
					<p class="text-white text-sm font-semibold">Kehadiran</p>
					<p class="text-white text-6xl font-bold">10</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-fuchsia-700 to-red-600 text-white">
					<p class="text-white text-sm font-semibold">Tidak Hadir</p>
					<p class="text-white text-6xl font-bold">1</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-fuchsia-700 to-indigo-700 text-white">
					<p class="text-white text-sm font-semibold">Sakit</p>
					<p class="text-white text-6xl font-bold">4</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-cyan-700 to-green-600 text-white">
					<p class="text-white text-sm font-semibold">Izin</p>
					<p class="text-white text-6xl font-bold">0</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>

.card-attendance {
	@apply flex flex-col justify-center items-center w-[12rem] h-[8rem] shadow-lg md:shadow-md shadow-black/50;
	/*box-shadow: 1px 3px 5px rgb(0 0 0 / 20%);*/
}

</style>