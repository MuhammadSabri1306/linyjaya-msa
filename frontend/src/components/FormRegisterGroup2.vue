<script setup>
import { reactive } from "vue";

const props = defineProps({ name: String, email: String, status: String });
const data = reactive({ name: props.name, email: props.email, status: props.status });

const emit = defineEmits(["prev", "next"]);

const onPrev = () => {
	const { name, email, status } = data;
	emit("prev", { name, email, status });
};

const onNext = event => {
	if(data.name.length < 1)
		return;

	event.preventDefault();
	const { name, email, status } = data;
	emit("next", { name, email, status });
};
</script>
<template>
	<form @submit="onNext">
		<div class="grid grid-cols-1 gap-4 mb-4">
			<div class="form-group">
				<label for="inputName">Nama*</label>
				<input v-model="data.name" type="text" id="inputName" required>
			</div>
			<div class="form-group">
				<label for="inputEmail">Email</label>
				<input v-model="data.email" type="email" id="inputEmail">
			</div>
			<div class="form-group">
				<label for="inputStatus">Status</label>
				<input v-model="data.status" type="text" id="inputStatus">
			</div>
		</div>
		<div class="flex justify-between items-start mb-12 px-4">
			<button type="button" class="py-2 px-4 leading-none text-sm font-medium text-black/80 rounded border border-gray-200 bg-gray-200" @click="onPrev">Prev</button>
			<button type="submit" @click="onNext" class="py-2 px-4 leading-none text-sm font-medium text-black/80 rounded border border-gray-200 bg-gray-200 enabled:hover:bg-gray-100">Next</button>
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