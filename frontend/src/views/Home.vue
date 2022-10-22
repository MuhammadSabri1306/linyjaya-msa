<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import BackgroundAnimated from "@/components/BackgroundAnimated.vue";
import GradientFullColors from "@/components/GradientFullColors.vue";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";
import FormLogin from "@/components/FormLogin.vue";
import FormRegister from "@/components/FormRegister.vue";

const route = useRoute();

const isPage = computed(() => {
	return page => route.name == page;
});

const userStore = useUserStore();
const btnStartDest = computed(() => userStore.hasLogin ? "/app" : "/login");
</script>
<template>
	<div class="relative w-screen h-screen overflow-hidden">
		<Transition name="animate-section-home">
			<div v-if="isPage('home')" class="scale-100 origin-top transition-scale duration-300 ease-in-out">
				<BackgroundAnimated />
				<div class="layer flex flex-col items-stretch">
					<nav class="container">
						<div class="flex items-stretch justify-center gap-6">
							<a href="#" class="topnav-link hidden md:inline">Data Inventaris</a>
							<a href="#" class="topnav-link hidden md:inline">Laporan Harian</a>
							<div class="topnav-brand"><SvgLjiLogo /></div>
							<a href="#" class="topnav-link hidden md:inline">Absensi Karyawan</a>
							<a href="#" class="topnav-link hidden md:inline">Laporan Keuangan</a>
						</div>
					</nav>
					<div class="my-auto p-8">
						<h1 class="text-xl md:text-3xl text-center text-slate-900 font-sans mb-4 md:mb-0">Selamat datang di Office Management System</h1>
						<h1 class="text-5xl md:text-7xl text-center text-slate-900 font-bold heading-style mb-8">LINY <span class="text-blue-900">JAYA</span> INFORMATIKA</h1>
						<div class="flex justify-center">
							<RouterLink :to="btnStartDest" class="btn-primary">
								Mulai
								<div class="arrow-wrapper">
									<div class="arrow"></div>
								</div>
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</Transition>
		<Transition name="animate-bg-form" :duration="{ enter: 800, leave: 600 }">
			<div v-if="!isPage('home')" class="absolute w-full h-full top-0 left-0 bg-white shadow-[0_-5rem_3rem_#fff] overflow-hidden">
				<div class="relative">
					<GradientFullColors />
				</div>
				<Transition name="animate-form" :duration="{ enter: 800, leave: 600 }">
					<div v-if="isPage('login')" class="absolute w-full h-full top-0 left-0 form-content opacity-100">
						<FormLogin class="bg-white rounded-2xl shadow w-full md:w-[25rem] mx-4 md:mx-0 pb-6 px-6" />
					</div>
				</Transition>
				<Transition name="animate-form" :duration="{ enter: 800, leave: 600 }">
					<div v-if="isPage('register')" class="absolute w-full h-full top-0 left-0 form-content opacity-100">
						<FormRegister class="bg-white rounded-2xl shadow w-full md:w-[25rem] mx-4 md:mx-0 pb-6 px-6" />
					</div>
				</Transition>
			</div>
		</Transition>
	</div>
</template>
<style scoped>

.topnav-brand {
	@apply bg-slate-900 text-white rounded-b py-2 px-4 flex;
}

.topnav-brand > svg {
	@apply h-6 md:h-8 w-auto m-auto;
}

.topnav-link {
	@apply text-lg text-center text-blue-900 font-medium mt-2 py-2 px-4 relative;
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
	@apply text-xl rounded text-white box-border rounded-lg lg:rounded text-white px-6 lg:px-4 py-3 lg:py-2 flex items-center gap-[0.6em] font-bold transition-colors duration-200 bg-blue-700 hover:bg-slate-900;
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

.form-content {
	@apply flex justify-center items-center;
}

.animate-section-home-enter-active {
	transition: transform .3s ease-in-out;
}

.animate-section-home-enter-active {
	transition: transform .3s .3s ease-in-out;
}

.animate-section-home-enter-from,
.animate-section-home-leave-to {
	@apply scale-90;
}

.animate-bg-form-enter-active {
	transition: top 0.3s;
}

.animate-bg-form-leave-active {
	transition: top 0.3s 0.3s;
}

.animate-bg-form-enter-from,
.animate-bg-form-leave-to {
	@apply top-full;
}

.animate-bg-form-enter-active .form-content,
.animate-form-enter-active {
	transition: top 0.3s 0.3s, opacity 0.5s 0.3s ease-out;
}

.animate-bg-form-leave-active .form-content,
.animate-form-leave-active {
	transition: top 0.3s, opacity 0.3s;
}

.animate-bg-form-enter-from .form-content,
.animate-bg-form-leave-to .form-content,
.animate-form-enter-from,
.animate-form-leave-to {
	@apply -top-4 opacity-0;
}

</style>