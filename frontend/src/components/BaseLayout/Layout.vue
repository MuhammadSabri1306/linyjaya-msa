<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useTimeWatcher } from "@/modules/timeWatcher";
import { defineIdDate } from "@/modules/dateIdn";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";
import { ArchiveBoxIcon, DocumentTextIcon, HandRaisedIcon, ArrowTrendingUpIcon } from "@heroicons/vue/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";

const userStore = useUserStore();
const userData = computed(() => userStore.user);

const router = useRouter();
const onLogOut = () => {
	userStore.logout();
	router.push("/");
};

defineProps({
	clockClassVisibility: { type: String, default: "hidden" }
});

const timeWatcher = useTimeWatcher();
const time = computed(() => {
	return {
		hour: timeWatcher.hour,
		minutes: timeWatcher.minutes
	}
});

const dateStr = defineIdDate(new Date()).toStr();
</script>
<template>
	<div id="baseLayout" class="flex flex-col items-stretch min-h-screen">
		<header class="hidden md:block bg-blue-900">
			<div class="bg-black/10">
				<div class="container">
					<div class="flex pt-2">
						<RouterLink to="/" class="navbar-menu">Home</RouterLink>
						<RouterLink to="/contact" class="navbar-menu">Contact</RouterLink>
						<RouterLink to="/app" class="navbar-menu">Dashboard</RouterLink>
						<button @click="onLogOut" type="button" class="navbar-menu ml-auto">Logout</button>
					</div>
				</div>
			</div>
			<div class="md:container lg:container-none xl:container lg:w-[80%] xl:w-auto mx-auto flex gap-x-12 gap-y-8 pt-16 pb-12 px-4">
				<div class="my-auto">
					<div class="flex items-center gap-4">
						<div>
							<div :class="{ 'opacity-0': !userData.img }" class="user-picture" :style="{ backgroundImage: 'url(' + userData.img + ')' }"></div>
						</div>
						<div class="user-data">
							<h6 class="text-white font-body text-3xl font-bold">{{ userData.name }}</h6>
							<p class="text-white/80 text-lg mb-2">{{ userData.status }}</p>
							<p>
								<a href="#" class="p-2 -ml-2 inline-flex items-center text-white/90 hover:text-white">
									<ArrowTopRightOnSquareIcon class="w-5 h-5" />
									<span class="text-sm font-medium leading-none ml-1">Edit Profil</span>
								</a>
							</p>
						</div>
					</div>
				</div>
				<nav class="mt-auto grow">
					<ul class="list-none topnav-menu">
						<li class="topnav-item">
							<RouterLink to="/app/inventory">
								<ArchiveBoxIcon class="topnav-icon" />
								<span>Data Inventaris</span>
							</RouterLink>
						</li>
						<li class="topnav-item">
							<RouterLink to="/app/report">
								<DocumentTextIcon class="topnav-icon" />
								<span>Laporan Harian</span>
							</RouterLink>
						</li>
						<li class="topnav-item">
							<RouterLink to="/app/attendance">
								<HandRaisedIcon class="topnav-icon" />
								<span>Absensi Kehadiran</span>
							</RouterLink>
						</li>
						<li class="topnav-item">
							<RouterLink to="/app/finance">
								<ArrowTrendingUpIcon class="topnav-icon" />
								<span>Laporan Finansial</span>
							</RouterLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<header :class="clockClassVisibility" class="bg-blue-900 py-8">
			<div class="container">
				<p class="text-5xl md:text-7xl font-bold text-white mb-2">{{ time.hour }}<br>{{ time.minutes }}<small class="text-sm font-bold"> WITA</small></p>
				<p class="text-white/80">{{ dateStr }}</p>
			</div>
		</header>
		<main class="pt-16 pb-20 md:pb-0">
			<slot></slot>
		</main>
	</div>
</template>
<style scoped>

.user-data > * {
	@apply whitespace-nowrap;
}

.user-picture {
	@apply w-32 h-32 bg-cover bg-center bg-no-repeat rounded-full;
	box-shadow: inset 0 0 1rem #000, 0 0 0.5rem rgba(255,255,255,0.1);
}

.topnav-menu {
	@apply hidden md:grid justify-end;
	grid-template-columns: repeat(4, 10rem);
}

@media (max-width: 1268px) {
	.topnav-menu {
		grid-template-columns: repeat(2, 10rem);
	}
}

.topnav-item > a {
	@apply flex flex-col items-center justify-center gap-4 p-6 text-sm text-white font-medium rounded transition-all bg-transparent hover:bg-white/10 my-0 hover:-mt-1 hover:mb-1;
}

.topnav-item span {
	@apply text-center;
}

.topnav-icon {
	@apply w-6 h-6;
}

.navbar-menu {
	@apply px-4 py-2 font-medium text-white/90 transition-all bg-transparent hover:bg-blue-900;
}

.navbar-menu.router-link-active {
	@apply bg-blue-900;
}

</style>