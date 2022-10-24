import { defineStore } from "pinia";
import { defineIdDate, toTimeStr } from "@/modules/dateIdn";

const getSampleToday = () => {
	const categories = ["absen datang", "absen istirahat"];
	const workStatus = "Work At Office";
	const desc = "";
	
	const times = ["08.00", "13.37", "17.02"];
	const idDate = defineIdDate(new Date());

	return categories.map((category, index) => {
		const day = idDate.day;
		const date = `${ idDate.date } ${ idDate.month } ${ idDate.year }`;
		const time = times[index];

		category = { id: index, title: category };
		return { category, day, date, time, workStatus, desc };
	});
};

const createDateTimeNow = () => {
	const idDate = defineIdDate(new Date());
	const day = idDate.day;
	const date = `${ idDate.date } ${ idDate.month } ${ idDate.year }`;
	const time = toTimeStr(idDate.dateObj).time;

	return { day, date, time };
};

export const useAttendanceStore = defineStore("attendance", {
	state: () => ({
		today: getSampleToday(),
		lastMonthItem: {
			present: 10,
			absent: 1,
			sick: 4,
			permit: 0
		},
		presentCategory: [
			{ id: 0, title: "absen datang" },
			{ id: 1, title: "absen istirahat" },
			{ id: 2, title: "absen pulang" }
		],
		formNewVisibility: false
	}),
	getters: {
		availablePresent: state => {
			return state.presentCategory.map(category => {
				const isDone = state.today.findIndex(tItem => tItem.category.id === category.id) >= 0;
				return { ...category, isDone };
			});
		}
	},
	actions: {
		setFormNewVisibility(val) {
			this.formNewVisibility = val;
		},
		addToday(workStatus, categoryId, desc) {
			const { day, date, time } = createDateTimeNow();
			const category = this.presentCategory.find(item => item.id == categoryId);
			console.log(category);
			this.today.push({ category, day, date, time, workStatus, desc });
		}
	}
});