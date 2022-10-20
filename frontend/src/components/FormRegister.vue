<script setup>
import { ref, computed } from "vue";
import { getFormData } from "@/modules/getFormData";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";
import { ArrowLongLeftIcon } from '@heroicons/vue/24/solid'

const formMaxSteps = 2;
const formCurIndex = ref(0);

const isLoading = ref(false);
const onSubmit = event => {

	event.preventDefault();
	isLoading.value = true;
};
</script>
<template>
	<form @submit="onSubmit" name="form-register" method="post">
		<div class="flex justify-center mb-12" :class="{ 'opacity-70': isLoading }">
			<div class="py-2 px-4 rounded-b bg-gradient-to-tl from-blue-600 to-indigo-500 text-white flex">
				<SvgLjiLogo class="h-8 w-auto drop-shadow-[0_0_1px_rgba(0,0,0,0.3)]" />
			</div>
		</div>
		<h6 class="text-3xl text-black/80 font-body font-bold ml-4 mb-8" :class="{ 'opacity-70': isLoading }">Register</h6>
		<p :class="{ 'text-black/70 font-medium': (formCurIndex !== formMaxSteps), 'text-green-600 font-bold': (formCurIndex === formMaxSteps), 'opacity-70': isLoading }" class="text-center text-lg">{{ formCurIndex + 1 }}/{{ formMaxSteps + 1 }}</p>
		<div v-if="formCurIndex === 0" class="grid grid-cols-1 gap-4 mb-4">
			<div class="form-group">
				<label for="inputUsername">Username*</label>
				<input type="text" name="username" id="inputUsername" required>
			</div>
			<div class="form-group">
				<label for="inputEmail">Email</label>
				<input type="email" name="email" id="inputEmail">
			</div>
			<div class="form-group">
				<label for="inputTelp">Nomor Telepon</label>
				<input type="tel" name="telp" id="inputTelp">
			</div>
		</div>
		<div v-else-if="formCurIndex === 1" class="grid grid-cols-1 gap-4 mb-4">
			<div class="form-group">
				<label for="inputName">Nama*</label>
				<input type="text" name="name" id="inputName" required>
			</div>
			<div class="form-group flex items-end flex-wrap">
				<label class="radio-label">Gender</label>
				<div class="ml-4 flex items-center gap-x-4 gap-y-2 flex-wrap">
					<div class="inline-flex items-center">
						<input type="radio" name="gender" id="genderMan" checked>
						<label for="genderMan" class="ml-1">Pria</label>
					</div>
					<div class="inline-flex items-center">
						<input type="radio" name="gender" id="genderWoman">
						<label for="genderWoman" class="ml-1">Wanita</label>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label for="textareaAddress">Alamat</label>
				<textarea name="address" id="textareaAddress" rows="3"></textarea>
			</div>
		</div>
		<div v-else-if="formCurIndex === 2" class="grid grid-cols-1 gap-4 mb-8">
			<div class="form-group">
				<label for="inputPassword">Password*</label>
				<input type="text" name="password" id="inputPassword" required>
			</div>
			<div class="form-group">
				<label for="inputCode">KODE MEMBER*</label>
				<input type="password" name="code" id="inputCode" required>
			</div>
		</div>
		<div class="flex justify-between items-start mb-12 px-4">
			<button type="button" @click="formCurIndex--" class="py-2 px-4 leading-none text-sm font-medium text-black/80 rounded border border-gray-200 bg-gray-200 enabled:hover:bg-gray-100" :disabled="formCurIndex < 1">Prev</button>
			<button v-if="formCurIndex < formMaxSteps" type="button" @click="formCurIndex++" class="py-2 px-4 leading-none text-sm font-medium text-black/80 rounded border border-gray-200 bg-gray-200 enabled:hover:bg-gray-100">Next</button>
			<button v-else type="submit" class="py-2 px-4 text-lg leading-none text-white rounded border border-blue-600 bg-blue-600 enabled:hover:bg-blue-500" :disabled="isLoading">Register</button>
		</div>
		<p class="text-sm text-center mb-6">
			<span class="text-black/70 py-2">Sudah punya akun?</span>
			<RouterLink to="/login" class="font-semibold text-black/70 hover:text-black/90 p-2">Log In</RouterLink>
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

.form-group label {
	@apply text-sm font-semibold text-black/60 block;
}

.form-group > label:not(.radio-label) {
	@apply mb-2;
}

.form-group > .radio-label {
	margin-bottom: 0.1rem;
}

.form-group input, .form-group textarea {
	@apply block w-full px-4 py-2 text-sm bg-transparent rounded border border-gray-200 focus:border-gray-400  text-black/70 focus:text-black/90;
}

</style>