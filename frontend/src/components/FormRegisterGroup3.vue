<script setup>
import { reactive } from "vue";

const props = defineProps({ telp: String, gender: String, address: String });
const data = reactive({ telp: props.telp, gender: props.gender, address: props.address });

const emit = defineEmits(["prev", "next"]);

const onPrev = () => {
	const { telp, gender, address } = data;
	emit("prev", { telp, gender, address });
};

const onNext = () => {
	const { telp, gender, address } = data;
	emit("next", { telp, gender, address });
};
</script>
<template>
	<form @submit.prevent="onNext">
		<div class="grid grid-cols-1 gap-4 mb-4">
			<div class="form-group">
				<label for="inputTelp">Nomor Telepon</label>
				<input v-model="data.telp" type="tel" id="inputTelp">
			</div>
			<div class="form-group flex items-end flex-wrap">
				<label class="radio-label">Gender</label>
				<div class="ml-4 flex items-center gap-x-4 gap-y-2 flex-wrap">
					<div class="inline-flex items-center">
						<input v-model="data.gender" value="L" type="radio" id="genderMan">
						<label for="genderMan" class="ml-1">Pria</label>
					</div>
					<div class="inline-flex items-center">
						<input v-model="data.gender" value="P" type="radio" id="genderWoman">
						<label for="genderWoman" class="ml-1">Wanita</label>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label for="textareaAddress">Alamat</label>
				<textarea v-model="data.address" id="textareaAddress" rows="4"></textarea>
			</div>
		</div>
		<div class="flex justify-between items-start mb-12 px-4">
			<button type="button" class="py-2 px-4 leading-none text-sm font-medium text-black/80 rounded border border-gray-200 bg-gray-200" @click="onPrev">Prev</button>
			<button type="submit" class="py-2 px-4 text-lg leading-none text-white rounded border border-blue-600 bg-blue-600 enabled:hover:bg-blue-500">Register</button>
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