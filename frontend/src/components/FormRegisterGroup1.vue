<script setup>
import { reactive } from "vue";

const props = defineProps({ code: String, username: String, password: String });
const data = reactive({ code: props.code, username: props.username, password: props.password });

const emit = defineEmits(["next"]);
const onNext = event => {
	const requiredData = [(data.code.length < 1), (data.username.length < 1), (data.username.length < 1)];
	if(requiredData.indexOf(true) >= 0)
		return;

	event.preventDefault();
	const { code, username, password } = data;
	emit("next", { code, username, password });
};
</script>
<template>
	<form @submit="onNext" method="post">
		<div class="grid grid-cols-1 gap-4 mb-4">
			<div class="form-group">
				<label for="inputCode">KODE MEMBER*</label>
				<input v-model="data.code" type="password" id="inputCode" required>
			</div>
			<div class="form-group">
				<label for="inputUsername">Username*</label>
				<input v-model="data.username" type="text" id="inputUsername" required>
			</div>
			<div class="form-group">
				<label for="inputPassword">Password*</label>
				<input v-model="data.password" type="text" id="inputPassword" required>
			</div>
		</div>
		<div class="flex justify-between items-start mb-12 px-4">
			<button type="button" class="py-2 px-4 leading-none text-sm font-medium text-black/80 rounded border border-gray-200 bg-gray-200" disabled>Prev</button>
			<button type="submit" class="py-2 px-4 leading-none text-sm font-medium text-black/80 rounded border border-gray-200 bg-gray-200 enabled:hover:bg-gray-100">Next</button>
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