import { defineStore } from "pinia";
import { defineIdDate } from "@/modules/dateIdn";

const getSampleToday = () => {
	const categories = ["absen datang", "absen istirahat", "absen pulang"];
	const workStatus = "Work At Office";
	const desc = "";
	
	const times = ["08.00", "13.37", "17.02"];
	const idDate = defineIdDate(new Date());

	return categories.map((category, index) => {
		const day = idDate.day;
		const date = `${ idDate.date } ${ idDate.month } ${ idDate.year }`;
		const time = times[index];
		return { category, day, date, time, workStatus, desc };
	});
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
		formNewVisibility: false
	}),
	actions: {
		setFormNewVisibility(val) {
			this.formNewVisibility = val;
		}
	}
});