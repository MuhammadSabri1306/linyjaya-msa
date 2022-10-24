<script setup>
import { ArchiveBoxIcon, DocumentTextIcon, HandRaisedIcon, ArrowTrendingUpIcon, RocketLaunchIcon } from "@heroicons/vue/24/outline";
</script>
<template>
	<nav class="md:hidden fixed w-screen left-0 bottom-0 bg-white overflow-x-hidden shadow border-t">
		<ul class="hidden list-none flex flex-1 overflow-x-auto px-4">
			<li class="bottom-nav-item">
				<RouterLink to="/app">
					<RocketLaunchIcon class="bottom-nav-icon" />
					<span>Beranda</span>
				</RouterLink>
			</li>
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
		<ul class="list-none grid grid-cols-5 px-4">
			<li class="bottom-nav-item">
				<RouterLink to="/app">
					<RocketLaunchIcon class="bottom-nav-icon" />
				</RouterLink>
			</li>
			<li class="bottom-nav-item">
				<RouterLink to="/app/inventory">
					<ArchiveBoxIcon class="bottom-nav-icon" />
				</RouterLink>
			</li>
			<li class="bottom-nav-item">
				<RouterLink to="/app/report">
					<DocumentTextIcon class="bottom-nav-icon" />
				</RouterLink>
			</li>
			<li class="bottom-nav-item">
				<RouterLink to="/app/attendance">
					<HandRaisedIcon class="bottom-nav-icon" />
				</RouterLink>
			</li>
			<li class="bottom-nav-item">
				<RouterLink to="/app/finance">
					<ArrowTrendingUpIcon class="bottom-nav-icon" />
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>
<style scoped>
	
.bottom-nav-item > a {
	@apply flex flex-col items-center justify-center gap-4 py-6 font-medium border-t-8 border-transparent -mt-1 transition-colors text-black/70 hover:text-blue-800 hover:border-blue-500;
}

.bottom-nav-item span {
	@apply text-center whitespace-nowrap;
}

.bottom-nav-icon {
	@apply w-6 h-6;
}

.bottom-nav-item .router-link-active {
	@apply text-blue-800 border-blue-600 font-semibold;
}

</style>