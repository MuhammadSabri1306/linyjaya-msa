<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AnimationParticles from "@/components/AnimationParticles.vue";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";
import SvgBgDot from "@/assets/SvgBgDot.svg";

const route = useRoute();
const isHomePage = computed(() => route.name == "home");
</script>
<template>
	<div class="relative w-screen h-screen overflow-hidden">
		<AnimationParticles class="h-screen" />
		<div class="layer flex">
			<div class="w-36 mt-auto text-yellow-300 p-8">
				<SvgBgDot />
			</div>
		</div>
		<div class="layer flex flex-col items-stretch">
			<nav class="container">
				<div class="flex items-stretch justify-center gap-6">
					<a href="#" class="topnav-link">Data Inventaris</a>
					<a href="#" class="topnav-link">Laporan Harian</a>
					<div class="topnav-brand"><SvgLjiLogo /></div>
					<a href="#" class="topnav-link">Absensi Karyawan</a>
					<a href="#" class="topnav-link">Laporan Keuangan</a>
				</div>
			</nav>
			<div class="my-auto p-8">
				<h1 class="text-3xl text-center text-slate-900 font-sans">Selamat datang di Office Management System</h1>
				<h1 class="text-7xl text-center text-slate-900 font-bold heading-style mb-8">LINY <span class="text-blue-900">JAYA</span> INFORMATIKA</h1>
				<div class="flex justify-center">
					<RouterLink to="/login" class="btn-primary">
						Mulai
						<div class="arrow-wrapper">
							<div class="arrow"></div>
						</div>
					</RouterLink>
				</div>
			</div>
		</div>
		<div :class="{ 'layer-bg-form': !isHomePage }" class="blur-circle"></div>
	</div>
</template>
<style scoped>

.blur-circle {
	@apply absolute w-[10rem] h-[10rem] -right-8 -bottom-8 bg-gradient-to-tl from-red-500 to-red-500 rounded-tl-full blur-[4px] transition-all duration-300 ease-in;
}

.blur-circle.layer-bg-form {
	@apply w-full h-full right-0 bottom-0 from-rose-500 to-red-500 rounded-none blur-0;
}

.layer {
	@apply fixed w-full h-full left-0 top-0;
}

.topnav-brand {
	@apply bg-slate-900 rounded-b py-2 px-4 flex;
}

.topnav-brand > svg {
	@apply h-8 w-auto m-auto;
}

.topnav-link {
	@apply text-lg text-blue-900 font-medium mt-2 py-2 px-4 relative;
}

.topnav-link:focus:after,
.topnav-link:hover:after {
	@apply w-full left-0;
}

.topnav-link:after {
	@apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-900;
	content: "";
	pointer-events: none;
	transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	transition-duration: 400ms;
	transition-property: width, left;
}

/* From uiverse.io by @satyamchaudharydev */
.btn-primary {
	@apply text-xl rounded text-white box-border rounded text-white px-4 py-2 flex items-center gap-[0.6em] font-bold transition-colors duration-200 bg-blue-700 hover:bg-slate-900;
}

.btn-primary .arrow-wrapper {
	@apply flex justify-center items-center;
}

.btn-primary .arrow {
	@apply mt-[1px] w-[10px] h-[2px] relative transition-all duration-200 bg-blue-700;
}

.btn-primary .arrow::before {
	content: "";
	box-sizing: border-box;
	position: absolute;
	border: solid theme(colors.white);
	border-width: 0 2px 2px 0;
	display: inline-block;
	top: -3px;
	right: 3px;
	transition: 0.2s;
	padding: 3px;
	transform: rotate(-45deg);
}

.btn-primary:hover .arrow {
	@apply bg-white;
}

.btn-primary:hover .arrow:before {
	@apply right-0;
}

.bg-hero {
    background-image: url('/img/banner_bg.png.webp');
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: left top;
}

</style>