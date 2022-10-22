<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ArchiveBoxIcon, DocumentTextIcon, HandRaisedIcon, HomeIcon, ArrowTrendingUpIcon } from "@heroicons/vue/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const userData = computed(() => userStore.user);

const route = useRoute();
const isDashboardPage = computed(() => route.name == "dashboard");
</script>
<template>
	<div id="baseLayout" class="flex flex-col items-stretch min-h-screen">
		<header class="py-12 px-4 bg-blue-900">
			<div class="md:container lg:container-none xl:container lg:w-[80%] xl:w-auto mx-auto flex gap-x-12 gap-y-8">
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
								<span>Pengajuan</span>
							</RouterLink>
						</li>
						<li class="topnav-item">
							<RouterLink to="/app/attendance">
								<HandRaisedIcon class="topnav-icon" />
								<span>Absensi Kehadiran</span>
							</RouterLink>
						</li>
						<li class="topnav-item">
							<RouterLink to="/app/finance/debit">
								<ArrowTrendingUpIcon class="topnav-icon" />
								<span>Laporan Keuangan</span>
							</RouterLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<main :class="{ 'pt-8': isDashboardPage }">
			<div v-if="!isDashboardPage" class="container mb-4 mt-8">
				<RouterLink to="/app" class="inline-flex items-end -ml-4 px-4 py-2 text-sm font-medium transition-colors text-gray-500 hover:text-gray-700">
					<HomeIcon class="topnav-icon mr-1" />
					<span>Dashboard</span>
				</RouterLink>
			</div>
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

</style>