<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { getFormData } from "@/modules/getFormData";
import SvgLjiLogo from "@/assets/SvgLjiLogo.svg";
import { ArrowLongLeftIcon } from "@heroicons/vue/24/solid";
import FormRegisterGroup1 from "@/components/FormRegisterGroup1.vue";
import FormRegisterGroup2 from "@/components/FormRegisterGroup2.vue";
import FormRegisterGroup3 from "@/components/FormRegisterGroup3.vue";

const router = useRouter();
const formMaxSteps = 2;
const formCurIndex = ref(0);
const isLoading = ref(false);

const data = reactive({
	code: "",
	username: "",
	password: "",
	name: "",
	email: "",
	status: "",
	telp: "",
	gender: "L",
	address: ""
});

const onGroup1Next = updatedData => {
	data.code = updatedData.code;
	data.username = updatedData.username;
	data.password = updatedData.password;
	formCurIndex.value = 1;
};

const onGroup2Prev = updatedData => {
	data.name = updatedData.name;
	data.email = updatedData.email;
	data.status = updatedData.status;
	formCurIndex.value = 0;
};

const onGroup2Next = updatedData => {
	data.name = updatedData.name;
	data.email = updatedData.email;
	data.status = updatedData.status;
	formCurIndex.value = 2;
};

const onGroup3Prev = updatedData => {
	data.telp = updatedData.telp;
	data.gender = updatedData.gender;
	data.address = updatedData.address;
	formCurIndex.value = 1;
};

const onGroup3Submit = updatedData => {
	data.telp = updatedData.telp;
	data.gender = updatedData.gender;
	data.address = updatedData.address;
	isLoading.value = true;

	const { code, username, password, name, email, status, telp, gender, address } = data;
	console.log({ code, username, password, name, email, status, telp, gender, address });
};

</script>
<template>
	<form>
		<div class="flex justify-center mb-12" :class="{ 'opacity-70': isLoading }">
			<div class="py-2 px-4 rounded-b bg-gradient-to-tl from-blue-600 to-indigo-500 text-white flex">
				<SvgLjiLogo class="h-8 w-auto drop-shadow-[0_0_1px_rgba(0,0,0,0.3)]" />
			</div>
		</div>
		<h6 class="text-3xl text-black/80 font-body font-bold ml-4 mb-8" :class="{ 'opacity-70': isLoading }">Register</h6>
		<p :class="{ 'text-black/70 font-medium': (formCurIndex !== formMaxSteps), 'opacity-70': isLoading }" class="text-center text-lg">{{ formCurIndex + 1 }}/{{ formMaxSteps + 1 }}</p>
		<FormRegisterGroup1 v-if="formCurIndex === 0" :code="data.code" :username="data.username" :password="data.password" @next="onGroup1Next" />
		<FormRegisterGroup2 v-else-if="formCurIndex === 1" :name="data.name" :email="data.email" :status="data.status" @prev="onGroup2Prev" @next="onGroup2Next" />
		<FormRegisterGroup3 v-else-if="formCurIndex === 2" :telp="data.telp" :gender="data.gender" :address="data.address" @prev="onGroup3Prev" @next="onGroup3Submit" />
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

</style>