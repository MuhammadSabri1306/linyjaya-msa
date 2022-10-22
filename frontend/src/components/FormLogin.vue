<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getFormData } from "@/modules/getFormData";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";
import { ArrowLongLeftIcon } from "@heroicons/vue/24/solid";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();
const isLoading = ref(false);

const onSubmit = event => {
	const data = getFormData(event.target);
	if(data.username.length < 1 || data.password.length < 1)
		return;

	event.preventDefault();
	isLoading.value = true;

	const isLoginSuccess = userStore.login(data.username, data.password);

	if(isLoginSuccess) {
		router.push("/app");
		return;
	}

	isLoading.value = false;
};
</script>
<template>
	<form @submit="onSubmit" name="form-login" method="post">
		<div class="flex justify-center mb-12" :class="{ 'opacity-70': isLoading }">
			<div class="py-2 px-4 rounded-b bg-gradient-to-tl from-blue-600 to-indigo-500 text-white flex">
				<SvgLjiLogo class="h-8 w-auto drop-shadow-[0_0_1px_rgba(0,0,0,0.3)]" />
			</div>
		</div>
		<h6 class="text-3xl text-black/80 font-body font-bold ml-4 mb-4" :class="{ 'opacity-70': isLoading }">Login Form</h6>
		<div class="grid grid-cols-1 gap-2 mb-4">
			<div class="form-group">
				<input type="text" name="username" id="inputUsername" required :disabled="isLoading">
				<label for="inputUsername">Username / Email / No. Handphone</label>
			</div>
			<div class="form-group">
				<input type="password" name="password" id="inputPassword" required :disabled="isLoading">
				<label for="inputPassword">Password</label>
			</div>
		</div>
		<div class="flex justify-between flex-wrap gap-x-4 gap-y-2 mb-6 px-4">
			<div class="flex items-center">
				<input type="checkbox" name="remember-me" id="checkRememberMe" :disabled="isLoading">
				<label for="checkRememberMe" class="ml-1 font-medium text-sm text-black/70">Remember Me</label>
			</div>
			<a href="#" class="font-semibold text-sm text-black/70 hover:text-black/90">Lupa Password</a>
		</div>
		<div class="flex mb-12">
			<button type="submit" class="py-2 px-4 w-full text-lg leading-none text-white rounded border border-blue-600 bg-blue-600 enabled:hover:bg-blue-500" :disabled="isLoading">Log In</button>
		</div>
		<p class="text-sm text-center mb-6">
			<span class="text-black/70 py-2">Belum punya akun?</span>
			<RouterLink to="/register" class="font-semibold text-black/70 hover:text-black/90 p-2">Buat Akun</RouterLink>
		</p>
		<div>
			<RouterLink to="/" class="ml-1 font-semibold text-black/70 hover:text-black/90 p-2 flex items-center">
				<ArrowLongLeftIcon class="w-5 h-5" />
				<span class="font-sm ml-1 mb-1">Beranda</span>
			</RouterLink>
		</div>
	</form>
</template>
<style scoped>

input:disabled, button:disabled {
	@apply opacity-70;
}

.form-group {
	@apply relative pt-3;
}

.form-group > label {
	@apply absolute top-0 left-0 text-xs font-semibold text-black/60 bg-white py-1 px-2 mx-4;
}

.form-group > input, .form-group > textarea {
	@apply block w-full text-lg px-4 pb-2 pt-3 bg-transparent rounded border border-gray-200 focus:border-gray-400  text-black/70 focus:text-black/90;
}

</style>