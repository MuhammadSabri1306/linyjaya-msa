<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import BaseLayout from "@/components/BaseLayout/Layout.vue";
import { useTimeWatcher } from "@/modules/timeWatcher";

const timeWatcher = useTimeWatcher();
const time = computed(() => {
	return {
		hour: timeWatcher.hour,
		minutes: timeWatcher.minutes
	}
});

const getScrollVal = () => {
	const val = window.scrollY * 30 / 100;
	return val >= 100 ? 0 : (100 - val) / 100;
};

const scrollVal = ref(getScrollVal());
const onScroll = () => {
	scrollVal.value = getScrollVal();
};

const headingStyles = computed(() => {
	return {
		opacity: scrollVal.value,
		scale: scrollVal.value < 0.8 ? 0.8 : scrollVal.value > 0.9 ? 1 : scrollVal.value
	};
});

onMounted(() => {
	window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", onScroll);
});
</script>
<template>
	<BaseLayout class="bg-blue-900" clockClassVisibility="md:hidden">
		<div class="container mb-12 flex flex-col items-start header-title" :style="{ opacity: headingStyles.opacity, transform: 'scale(' + headingStyles.scale + ')' }">
			<h2 class="text-7xl text-white text-shadow-custom font-bold">Selamat Datang</h2>
			<h6 class="text-5xl text-red-400 text-shadow-custom font-bold mb-4">Kurt Cobain</h6>
		</div>
        <div class="bg-white pt-12 md:pt-0 rounded-t-3xl md:rounded-0 md:bg-gradient-to-b from-blue-900 to-blue-800 min-h-[70vh]">
			<div class="container">
				<div class="md:flex items-start gap-8 flex-wrap">
					<div>
						<p class="text-lg text-black/70 md:text-white/70 mb-8">Apa yang ingin kamu lakukan hari ini?</p>
						<ul class="list-none features-list">
							<li><a href="" class="features-link">Isi absensi hari ini</a></li>
							<li><a href="" class="features-link">Buat laporan progres pekerjaan hari ini</a></li>
							<li><a href="" class="features-link">Tambah laporan keuangan bulanan</a></li>
							<li><a href="" class="features-link">Buat laporan kunjungan</a></li>
							<li><a href="" class="features-link">Cek daftar inventaris kantor</a></li>
							<li><a href="" class="features-link">Ajukan izin atau cuti</a></li>
						</ul>
					</div>
					<div class="hidden md:block rounded-2xl shadow bg-slate-900 card-unpadding-y ml-auto">
						<div class="py-4 px-8">
							<p class="text-xl text-center text-white/80">Makassar, 13 Juni 1998</p>
						</div>
						<div class="card-clock">
							<div class="pt-8">
								<p class="text-5xl md:text-7xl font-bold text-center text-red-500">{{ time.hour }}:{{ time.minutes }}<small class="text-sm font-bold"> WITA</small></p>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 1440 320"><path fill="#ef4444" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </BaseLayout>
</template>
<style scoped>

.header-title {
	transition: opacity .3s, transform .8s;
}

.text-shadow-custom {
	text-shadow: 0 0 7px rgba(0,0,0,0.3);
}

@media screen(md) {
	.text-shadow-custom {
		text-shadow: 0 0 7px rgba(0,0,0,0.7);
	}
}

.features-list li {
	@apply flex mb-2;
}
	
.features-list .features-link {
	@apply relative font-semibold text-lg mx-4 md:mx-8 py-2 transition-all duration-300 text-black/80 md:text-white/80 hover:text-black/90 md:hover:text-white/90 mt-0 hover:-mt-1 mb-0 hover:mb-1;
}

.features-list .features-link:focus:after,
.features-list .features-link:hover:after, {
	@apply w-full left-0;
}

.features-list .features-link:after {
	@apply absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400;
	content: "";
	pointer-events: none;
	transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	transition-duration: 400ms;
	transition-property: width, left;
}

.card-clock {
	@apply rounded-2xl bg-gray-100 overflow-hidden;
}

</style>