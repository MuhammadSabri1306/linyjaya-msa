import { defineStore } from "pinia";

export const useViewStore = defineStore("view", {
	state: () => ({
		baseLayout: {
			pages: ["dashboard", "inventory", "report", "attendance", "finance"],
			activeIndex: 0
		}
	}),
	actions: {
		setBaseLayoutActivePage(index) {
			if(index < this.baseLayout.pages.length)
				this.baseLayout.activeIndex = index;
		}
	}
});