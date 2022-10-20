<script setup>
import { reactive } from "vue";
import { ArchiveBoxIcon, DocumentTextIcon, HandRaisedIcon } from "@heroicons/vue/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";

const userData = reactive({
	name: "Kurt Cobain",
	status: "Web Programmer",
	img: "/img/user-pic-sample.webp"
});
</script>
<template>
	<div class="flex flex-col items-stretch min-h-screen">
		<header class="py-12 px-4 bg-blue-900">
			<div class="md:container lg:container-none xl:container lg:w-[80%] xl:w-auto mx-auto flex gap-x-12 gap-y-8">
				<div>
					<div class="flex items-center gap-4">
						<div>
							<div class="user-picture" :style="{ backgroundImage: 'url(' + userData.img + ')' }"></div>
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
							<a href="#">
								<ArchiveBoxIcon class="topnav-icon" />
								<span>Data Inventaris</span>
							</a>
						</li>
						<li class="topnav-item">
							<a href="#">
								<DocumentTextIcon class="topnav-icon" />
								<span>Laporan Harian</span>
							</a>
						</li>
						<li class="topnav-item">
							<a href="#">
								<HandRaisedIcon class="topnav-icon" />
								<span>Absensi</span>
							</a>
						</li>
						<li class="topnav-item">
							<a href="#">
								<ArchiveBoxIcon class="topnav-icon" />
								<span>Laporan Keuangan</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<main class="py-8">
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