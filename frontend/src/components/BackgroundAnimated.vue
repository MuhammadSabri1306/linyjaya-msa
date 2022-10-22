<script setup>
import AnimationParticles from "@/components/AnimationParticles.vue";
import SvgBgDot from "@/assets/SvgBgDot.svg";
</script>
<template>
	<div class="relative">
		<AnimationParticles class="h-screen" />
		<div class="layer flex">
			<div class="w-36 mt-auto text-yellow-300 p-8">
				<SvgBgDot />
			</div>
		</div>
		<div class="absolute w-[10rem] h-[10rem] -right-8 -bottom-8 bg-gradient-to-tl from-red-500 to-red-500 rounded-tl-full blur-[4px]"></div>
	</div>
</template>