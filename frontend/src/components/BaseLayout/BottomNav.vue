<script setup>
import { ArchiveBoxIcon, DocumentTextIcon, HandRaisedIcon, ArrowTrendingUpIcon } from "@heroicons/vue/24/outline";
</script>
<template>
	<nav class="md:hidden fixed w-screen left-0 bottom-0 bg-white overflow-x-hidden shadow border-t">
		<ul class="list-none flex flex-1 overflow-x-auto px-4">
			<li class="bottom-nav-item">
				<RouterLink to="/app/inventory">
					<ArchiveBoxIcon class="bottom-nav-icon" />
					<span>Data Inventaris</span>
				</RouterLink>
			</li>
			<li class="bottom-nav-item">
				<RouterLink to="/app/report">
					<DocumentTextIcon class="bottom-nav-icon" />
					<span>Laporan Harian</span>
				</RouterLink>
			</li>
			<li class="bottom-nav-item">
				<RouterLink to="/app/attendance">
					<HandRaisedIcon class="bottom-nav-icon" />
					<span>Absensi Kehadiran</span>
				</RouterLink>
			</li>
			<li class="bottom-nav-item">
				<RouterLink to="/app/finance">
					<ArrowTrendingUpIcon class="bottom-nav-icon" />
					<span>Laporan Finansial</span>
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>
<style scoped>
	
.bottom-nav-item > a {
	@apply flex flex-col items-center justify-center gap-4 p-4 font-medium border-t-8 border-transparent -mt-1 transition-colors text-gray-700 hover:text-blue-900 hover:border-blue-500;
}

.bottom-nav-item span {
	@apply text-center whitespace-nowrap;
}

.bottom-nav-icon {
	@apply w-6 h-6;
}

.bottom-nav-item .router-link-active {
	@apply text-blue-900 border-blue-600 font-semibold;
}

</style>