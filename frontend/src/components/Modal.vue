<script setup>
import { ref, watch } from "vue";
import { useSlots } from "vue";
import { XCircleIcon } from "@heroicons/vue/24/solid";

const emit = defineEmits(["open", "close"]);
const props = defineProps({
	show: { type: Boolean, default: false },
	freezeBackdrop: { type: Boolean, default: true },
	widthClass: { type: String, default: "w-[500px]" }
});

const isShow = ref(false);

const open = () => {
	props.freezeBackdrop && document.body.classList.add("overflow-hidden");
	isShow.value = true;
	emit("open");
};

const close = () => {
	props.freezeBackdrop && document.body.classList.remove("overflow-hidden");
	isShow.value = false;
	emit("close");
};

const watcherSrc = () => props.show;
watch(watcherSrc, show => {
	if(show)
		return open();
	close();
});

const slots = useSlots();
const hasSlotHeader = !!slots.header;
const hasSlotFooter = !!slots.footer;
</script>
<template>
	<Transition name="fade" :duration="500">
		<div v-show="isShow" class="modal-wrapper">
			<div class="modal" :class="widthClass">
				<div :class="{ 'border-b': hasSlotHeader }" class="modal-header">
					<slot name="header"></slot>
					<button @click="close" :class="{ '-translate-y-1/2 top-1/2': hasSlotHeader, 'top-0': !hasSlotHeader }" class="text-gray-400 hover:text-gray-500 w-10 h-10 inline-flex absolute right-0">
						<XCircleIcon class="w-6 h-6 m-auto" />
					</button>
				</div>
				<div class="modal-body">
					<slot name="content"></slot>
				</div>
				<div :class="{ 'border-t pt-3': hasSlotFooter }" class="modal-footer px-6 pb-3">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</Transition>
</template>
<style scoped>
	
.modal-wrapper {
	@apply fixed mx-auto my-0 z-[1000] overflow-auto outline-0 bg-gray-900/70 inset-0;
}

.modal {
	@apply relative top-[100px] mx-auto border overflow-auto box-border bg-white rounded-2xl lg:rounded translate-y-0;
}

.modal-header {
	@apply pl-6 pr-4 py-3 relative;
}

.modal-body {
	@apply px-6 py-4 relative;
}

.fade-enter-active, .fade-leave-active {
	@apply transition-opacity;
}

.fade-enter-from, .fade-leave-to {
	@apply opacity-0;
}

.fade-enter-to, .fade-leave-from {
	@apply opacity-100;
}

.fade-enter-active .modal, .fade-leave-active .modal {
	transition: margin-top 0.5s, margin-bottom 0.5s;
}

.fade-enter-from .modal, .fade-leave-to .modal {
	margin-top: -5rem;
	margin-bottom: 5rem;
}

.fade-enter-to .modal, .fade-leave-from .modal {
	margin-top: 0;
	margin-bottom: 0;
}

</style>