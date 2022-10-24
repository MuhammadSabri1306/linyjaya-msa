import { ref, reactive, watch, onMounted, onUnmounted } from "vue";
import { toTimeStr } from "@/modules/dateIdn";

export const useTimeWatcher = () => {
	const intval = ref(null);
	const time = reactive({
		hour: null,
		minutes: null
	});

	onMounted(() => {
		intval.value = setInterval(() => {
			const { hour, minutes } = toTimeStr(new Date());
			time.hour = hour;
			time.minutes = minutes;
		}, 1000);
	});

	onUnmounted(() => clearInterval(intval.value));

	return time;
};