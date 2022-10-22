<script setup>
import { computed } from "vue";
import { useAttendanceStore } from "@/stores/attendance";

const attendanceStore = useAttendanceStore();
const data = computed(() => attendanceStore.lastMonthItem);
</script>
<template>
	<div>
		<div class="container px-12">
			<div class="hidden lg:flex flex-wrap gap-4 py-4">
				<div class="card card-attendance bg-gradient-to-br from-cyan-700 to-green-600 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Kehadiran</p>
					<p class="text-white text-6xl font-bold">{{ data.present }}</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-fuchsia-700 to-red-600 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Tidak Hadir</p>
					<p class="text-white text-6xl font-bold">{{ data.absent }}</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-fuchsia-700 to-indigo-700 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Sakit</p>
					<p class="text-white text-6xl font-bold">{{ data.sick }}</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-emerald-600 to-yellow-500 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Izin</p>
					<p class="text-white text-6xl font-bold">{{ data.permit }}</p>
				</div>
			</div>
		</div>
		<div class="lg:hidden w-screen overflow-x-hidden">
			<div class="grid grid-cols-[repeat(4,12rem)] px-4 md:px-8 py-4 gap-4 overflow-x-auto">
				<div class="card card-attendance bg-gradient-to-br from-green-600 to-lime-600 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Kehadiran</p>
					<p class="text-white text-6xl font-bold">10</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-rose-600 to-red-500 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Tidak Hadir</p>
					<p class="text-white text-6xl font-bold">1</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-purple-600 to-indigo-600 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Sakit</p>
					<p class="text-white text-6xl font-bold">4</p>
				</div>
				<div class="card card-attendance bg-gradient-to-br from-amber-500 to-yellow-500 text-white w-[12rem] h-[8rem]">
					<p class="text-white text-sm font-semibold">Izin</p>
					<p class="text-white text-6xl font-bold">0</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	
.card {
	@apply rounded-2xl lg:rounded shadow;
}

.card:not(.card-unpadding-x) {
	@apply px-4;
}

.card:not(.card-unpadding-y) {
	@apply py-4;
}

.card-attendance {
	@apply flex flex-col justify-center items-center;
}

</style>